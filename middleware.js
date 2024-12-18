/*
import { NextResponse } from 'next/server'
export { default } from "next-auth/middleware"

export function middleware(req) {
  console.log(`Request made to: ${req.nextUrl.pathname}`)
  return NextResponse.next()
}

export const config = { matcher: ["/clases", "/labs"] }
*/

/* 
See https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
*/
import AuthMiddleware from "next-auth/middleware"

export const middleware = AuthMiddleware.default // To get the function. Only for nextra

export const config = { 
  matcher: ["/protected/:path*"],
}