import { NextResponse } from 'next/server';
import { Session, User } from 'better-auth';
import { getServerSession } from '@/utils/auth';

export async function GET(): Promise<NextResponse<{ session: Session | null; user: User | null }>> {
  const session = await getServerSession();

  return NextResponse.json(session);
}
