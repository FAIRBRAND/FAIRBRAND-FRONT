// middleware.ts
import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
 
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'fr'
})
 
export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}
 
// This middleware will interrupt translation to static files.
export const config = {
  matcher: ['/','/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}