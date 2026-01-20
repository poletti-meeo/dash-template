'use client';

import { Button, Divider, PasswordInput, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function SecuritySettingsPage() {
  const form = useForm({
    initialValues: {
      currentPassword: '',
      newPassword: '',
    },
  });

  const handleChangePassword = (values: typeof form.values) => {
    console.log(values);
    // TODO: call auth API
  };

  return (
    <Stack maw={480}>
      <Title order={4}>Change password</Title>

      <PasswordInput label="Current password" {...form.getInputProps('currentPassword')} />
      <PasswordInput label="New password" {...form.getInputProps('newPassword')} />

      <Button onClick={() => form.onSubmit(handleChangePassword)}>Update password</Button>

      <Divider my="md" />

      <Title order={4}>Sessions</Title>
      <Button color="red" variant="light">
        Sign out from all devices
      </Button>
    </Stack>
  );
}
