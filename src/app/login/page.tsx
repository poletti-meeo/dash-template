import { Center, Divider, Image, Stack } from '@mantine/core';
import { LoginForm } from '@/components/auth/login/login-form';
import { SignUpButton } from '@/components/auth/signup';

export default function LoginPage() {
  return (
    <Center style={{ height: '100dvh' }}>
      <Stack align="center" justify="center" style={{ minWidth: '300px', maxWidth: '500px' }}>
        <Image src="/img/login-test.jpg" w={100} h={100} fit="cover" bdrs="xl" />

        <LoginForm />

        <Divider w="100%" my={12} label="OR" />

        <SignUpButton />
      </Stack>
    </Center>
  );
}
