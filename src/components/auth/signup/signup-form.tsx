'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BorderAnimate } from '@gfazioli/mantine-border-animate';
import { Button, Card, Group, PasswordInput, TextInput, Title } from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { authClient } from '@/utils/auth-client';

export const SignUpForm = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validateInputOnBlur: true,
    validate: {
      name: (val) => (!val ? 'Field cannot be empty' : null),
      email: isEmail('Invalid Email'),
      password: (val) => {
        if (!val) {
          return 'Field cannot be empty';
        }
        if (val.length < 8) {
          return 'Password must be at least 8 characters';
        }
      },
    },
  });

  const onValidate = async (values: { email: string; password: string; name: string }) => {
    console.log(values);
    setLoading(true);
    const { email, password, name } = values;
    //Call API to Login?
    try {
      const signUp = await authClient.signUp.email({ email, password, name, image: 'null' });
      console.log('SIGNUP:', signUp);
      if (signUp.data?.user) {
        router.replace('/login');
      }
    } catch (err) {
      console.error(err);
      showNotification({
        color: 'red',
        title: 'Login failed',
        message: 'Invalid email or password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card withBorder w="100%" p="lg" radius="lg">
      <Title size="lg" mb={12} ta="center">
        Sign Up
      </Title>
      <form onSubmit={form.onSubmit(onValidate)} style={{ width: '100%' }}>
        <TextInput
          mb={12}
          withAsterisk
          label="Name"
          type="text"
          autoComplete="name"
          placeholder="Enter your profile name"
          // key={form.key('email')}
          {...form.getInputProps('name')}
        />

        <TextInput
          mb={12}
          withAsterisk
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          // key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          mb={12}
          withAsterisk
          label="Password"
          autoComplete="new-password"
          placeholder="Enter your password"
          // key={form.key('password')}
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps('password')}
        />

        <Group justify="center" mt="md" w="100%">
          <BorderAnimate
            radius="xl"
            w="100%"
            variant="pulse"
            colorFrom="yellow.6"
            colorTo="red.8"
            borderWidth="sm"
            duration={5}
          >
            <Button
              variant="light"
              color="indigo"
              radius="xl"
              w="100%"
              type="submit"
              loading={loading}
            >
              Register
            </Button>
          </BorderAnimate>
        </Group>
      </form>
    </Card>
  );
};
