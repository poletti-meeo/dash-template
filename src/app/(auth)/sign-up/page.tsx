import { Center, Stack } from '@mantine/core';
import { SignUpForm } from '@/components/auth/signup';

export default function SignUpPage() {
  return (
    <Center style={{ height: '100dvh' }}>
      <Stack align="center" justify="center" style={{ minWidth: '300px', maxWidth: '500px' }}>
        <SignUpForm />
      </Stack>
    </Center>
  );
}
