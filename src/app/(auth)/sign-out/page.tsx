'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Center, Loader, LoadingOverlay, Stack, Text } from '@mantine/core';
import { authClient } from '@/utils/auth-client';

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const signOut = async () => {
      try {
        await authClient.signOut();
      } catch (error) {
        console.error(error);
      } finally {
        router.replace('/login');
      }
    };

    signOut();
  }, [router]);

  return (
    <LoadingOverlay
      visible
      loaderProps={{
        children: (
          <Stack>
            <Center>
              <Loader size={50} />
            </Center>
            <Text>Logging out...</Text>
          </Stack>
        ),
      }}
    />
  );
}
