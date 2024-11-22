// FILE: pages/_middleware.js
import { NextResponse } from 'next/server'

export function middleware(req) {
  console.log(`Request made to: ${req.nextUrl.pathname}`)
  return NextResponse.next()
}