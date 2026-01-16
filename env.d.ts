declare namespace NodeJS {
  export interface ProcessEnv {
    CONF_VER: string;
    ENVIRONMENT: 'DEV' | 'STAGE' | 'PROD';

    BETTER_AUTH_SECRET: string;
    BETTER_AUTH_URL: string;

    NEXT_PUBLIC_APP_NAME: string;

    FIREBASE_PROJECT_ID: string;
    FIREBASE_CLIENT_EMAIL: string;
    FIREBASE_PRIVATE_KEY: string;

    GOOGLE_CLIENT_ID: string;
  }
}
