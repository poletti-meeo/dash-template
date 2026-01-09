import { firestoreAdapter, initFirestore } from '@yultyyev/better-auth-firestore';
import { betterAuth } from 'better-auth';
import { cert } from 'firebase-admin/app';

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
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
    },
  },
  database: firestoreAdapter({
    firestore,
    namingStrategy: 'default',
    collections: {
      users: 'users',
      // sessions: "sessions",
      // accounts: "accounts",
      // verificationTokens: "verificationTokens",
    },
  }),
});
