'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@mantine/core';

export const SignUpButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push('/sign-up')} radius="xl" variant="filled" w="100%">
      Sign up
    </Button>
  );
};
