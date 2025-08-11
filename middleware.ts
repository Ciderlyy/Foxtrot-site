import { NextResponse } from "next/server"
import { auth } from "./lib/auth"

export async function middleware(request: Request) {
  const session = await auth()
  const url = new URL(request.url)
  
  // Protect admin and dashboard routes
  if (url.pathname.startsWith("/admin") || url.pathname.startsWith("/dashboard")) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
    
    // Additional role-based protection for admin routes
    if (url.pathname.startsWith("/admin") && session.user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
  }
  
  // Protect tools and resources pages
  if (url.pathname === "/tools" || url.pathname === "/resources") {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = { 
  matcher: [
    "/admin/:path*", 
    "/dashboard/:path*", 
    "/tools", 
    "/resources"
  ] 
}
