import type { NextRequest } from 'next/server'

import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import { i18n } from '../i18n.config'

function getLocale(request: NextRequest): string | undefined {
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => headers[key] = value)

  const locales: string[] = i18n.locales

  const languages = new Negotiator({ headers }).languages(locales)

  const locale = match(languages, locales, i18n.defaultLocale)

  return locale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = i18n.locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale)
    return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
}
