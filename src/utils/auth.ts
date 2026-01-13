import { headers as Headers } from 'next/headers';
import { firestoreAdapter, initFirestore } from '@yultyyev/better-auth-firestore';
import { betterAuth } from 'better-auth';
import { cert } from 'firebase-admin/app';
import { hashPassword, verifyPassword } from './password-utils';

const firestore = initFirestore({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
  }),
  projectId: process.env.FIREBASE_PROJECT_ID!,
  name: 'better-auth',
});

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    password: {
      hash: hashPassword,
      verify: verifyPassword,
    },
  },
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: firestoreAdapter({
    firestore,
    namingStrategy: 'default',
    collections: {
      users: 'users',
      //   // sessions: "sessions",
      //   // accounts: "accounts",
      //   // verificationTokens: "verificationTokens",
    },
  }),
});

export async function getServerSession() {
  const headers = await Headers();
  const session = await auth.api.getSession({
    headers,
  });

  return session;
}
