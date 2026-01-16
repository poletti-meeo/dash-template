import { headers as Head } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/utils/auth';

export async function proxy(request: NextRequest) {
  const headers = await Head();
  const session = await auth.api.getSession({ headers });

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
