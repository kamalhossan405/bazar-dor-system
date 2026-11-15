import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    const user = session?.user;
    if (!user) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
  } catch (error) {
    console.warn('[proxy auth check error]', error);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: [
    '/profile',
  ],
};
