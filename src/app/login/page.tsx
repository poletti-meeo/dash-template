import { Center, Image, Stack } from '@mantine/core';
import { LoginForm } from '@/components/login/login-form';

export default function LoginPage() {
  return (
    <Center style={{ height: '100dvh' }}>
      <Stack align="center" justify="center" style={{ minWidth: '300px', maxWidth: '500px' }}>
        <Image src="/img/login-test.jpg" w={100} h={100} fit="cover" bdrs="xl" />

        <LoginForm />
      </Stack>
    </Center>
  );
}
