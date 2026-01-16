'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';
import { useAuthStore } from '@/store/auth';

export const SignUpButton = () => {
  const router = useRouter();
  const loading = useAuthStore((s) => s.authLoading);

  return (
    <Button
      onClick={() => router.push('/sign-up')}
      radius="xl"
      variant="filled"
      w="100%"
      loading={loading}
    >
      Sign up
    </Button>
  );
};
