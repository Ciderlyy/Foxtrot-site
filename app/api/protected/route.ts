import { NextRequest, NextResponse } from 'next/server'
import { requireAuth, JWTPayload } from '@/lib/auth'

async function protectedHandler(request: NextRequest, user: JWTPayload) {
  try {
    // This is a protected endpoint - only authenticated users can access
    return NextResponse.json({
      success: true,
      message: 'Access granted to protected resource',
      user: {
        username: user.username,
        rank: user.rank,
        unit: user.unit,
        accessTime: new Date().toISOString()
      },
      data: {
        // Your protected data here
        resources: [
          'Classified Document A',
          'Training Manual B',
          'Operation Plan C'
        ]
      }
    })
  } catch (error) {
    console.error('Protected route error:', error)
    return NextResponse.json(
      { error: 'Failed to access protected resource' },
      { status: 500 }
    )
  }
}

export const GET = requireAuth(new NextRequest(), protectedHandler)
export const POST = requireAuth(new NextRequest(), protectedHandler)
