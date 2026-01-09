import { Divider, Image, Stack } from '@mantine/core';
import { LoginForm } from '@/components/login/form';

export const LoginPage = () => {
  return (
    <Stack>
      <Image />
      <Divider />

      <LoginForm />
    </Stack>
  );
};
