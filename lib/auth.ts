import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'

export interface JWTPayload {
  userId: string
  username: string
  rank: string
  unit: string
  iat: number
  exp: number
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload
    return decoded
  } catch (error) {
    return null
  }
}

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization')
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7)
  }
  return null
}

export function requireAuth(
  request: NextRequest,
  handler: (request: NextRequest, user: JWTPayload) => Promise<NextResponse>
) {
  return async (request: NextRequest) => {
    try {
      const token = getTokenFromRequest(request)
      
      if (!token) {
        return NextResponse.json(
          { error: 'Authentication token required' },
          { status: 401 }
        )
      }

      const user = verifyToken(token)
      if (!user) {
        return NextResponse.json(
          { error: 'Invalid or expired token' },
          { status: 401 }
        )
      }

      // Log access
      await logAccess(request, user, 'API_ACCESS')

      return handler(request, user)
    } catch (error) {
      console.error('Auth middleware error:', error)
      return NextResponse.json(
        { error: 'Authentication failed' },
        { status: 401 }
      )
    }
  }
}

async function logAccess(request: NextRequest, user: JWTPayload, action: string) {
  try {
    const { supabase } = await import('@/lib/supabase')
    
    await supabase.from('access_logs').insert({
      user_id: user.userId,
      action,
      page_accessed: request.nextUrl.pathname,
      ip_address: request.ip || 'unknown',
      user_agent: request.headers.get('user-agent') || 'unknown'
    })
  } catch (error) {
    console.error('Failed to log access:', error)
  }
}
