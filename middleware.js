import { NextResponse } from 'next/server'
export { default } from "next-auth/middleware"

export function middleware(req) {
  console.log(`Request made to: ${req.nextUrl.pathname}`)
  return NextResponse.next()
}

export const config = { matcher: ["/clases", "/labs"] }