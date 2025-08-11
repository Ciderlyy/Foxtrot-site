import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Get user from database
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('username', username)
      .eq('is_active', true)
      .single()

    if (error || !user) {
      // Log failed login attempt
      await supabase.from('failed_logins').insert({
        username,
        ip_address: request.ip || 'unknown'
      })

      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash)
    if (!isValidPassword) {
      // Log failed login attempt
      await supabase.from('failed_logins').insert({
        username,
        ip_address: request.ip || 'unknown'
      })

      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Update last login
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', user.id)

    // Log successful login
    await supabase.from('access_logs').insert({
      user_id: user.id,
      action: 'LOGIN',
      page_accessed: 'login',
      ip_address: request.ip || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown'
    })

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        rank: user.rank,
        unit: user.unit
      },
      process.env.JWT_SECRET!,
      { expiresIn: '2h' }
    )

    // Return success response
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        rank: user.rank,
        unit: user.unit,
        email: user.email
      }
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
