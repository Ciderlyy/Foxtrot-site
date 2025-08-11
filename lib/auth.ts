import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { prisma } from "./prisma"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: { 
        email: { label: "Email", type: "email" }, 
        password: { label: "Password", type: "password" } 
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          const user = await prisma.user.findUnique({ 
            where: { email: credentials.email },
            select: {
              id: true,
              email: true,
              name: true,
              password: true,
              role: true,
              rank: true,
              unit: true,
              isActive: true
            }
          })

          if (!user || !user.isActive) {
            return null
          }

          const isValidPassword = await compare(credentials.password, user.password)
          if (!isValidPassword) {
            // Log failed login attempt
            await prisma.failedLogin.create({
              data: {
                email: credentials.email,
                ipAddress: 'unknown' // Will be updated in middleware
              }
            })
            return null
          }

          // Update last login
          await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() }
          })

          // Log successful login
          await prisma.accessLog.create({
            data: {
              userId: user.id,
              action: 'LOGIN',
              pageAccessed: 'login',
              ipAddress: 'unknown', // Will be updated in middleware
              userAgent: 'unknown'
            }
          })

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
            rank: user.rank,
            unit: user.unit
          }
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.rank = user.rank
        token.unit = user.unit
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string
        session.user.rank = token.rank as string
        session.user.unit = token.unit as string
      }
      return session
    }
  },
  events: {
    async signOut({ token }) {
      if (token.sub) {
        await prisma.accessLog.create({
          data: {
            userId: token.sub,
            action: 'LOGOUT',
            pageAccessed: 'logout',
            ipAddress: 'unknown',
            userAgent: 'unknown'
          }
        })
      }
    }
  }
})
