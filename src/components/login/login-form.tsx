'use client';

import { BorderAnimate } from '@gfazioli/mantine-border-animate';
import { IconBrandGoogleFilled } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { isEmail, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { authClient } from '@/utils/auth-client';

export const LoginForm = () => {
  const [visible, { toggle }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validateInputOnBlur: true,
    validate: {
      email: isEmail('Invalid Email'),
      password: (val) => (!val ? 'Field cannot be empty' : null),
    },
  });

  const onValidate = (values: { email: string; password: string; rememberMe: boolean }) => {
    console.log(values);
    const { email, password, rememberMe } = values;
    if (!email || !password) {
      console.error('Missing: ', email, password);
    }
    //Call API to Login?
    authClient.signIn.email({ email, password, rememberMe });
  };

  return (
    <>
      <Stack>
        <Button
          leftSection={
            <IconBrandGoogleFilled
              style={{ color: 'linear-gradient(-120deg, #4285F4, #34A853, #FBBC05, #EA4335)' }}
            />
          }
          variant="default"
          bdrs="xl"
          w="100%"
          type="button"
          color="dark"
        >
          Continue with Google
        </Button>
      </Stack>
      <Divider w="100%" />
      <Title size="lg" m={0}>
        Sign In
      </Title>
      <Text m={0} size="sm">
        with your email to access&nbsp;<strong>Dash-Template</strong>
      </Text>
      <form onSubmit={form.onSubmit(onValidate)} style={{ width: '100%' }}>
        <TextInput
          mb={12}
          withAsterisk
          label="Email"
          placeholder="Enter your email"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          mb={12}
          withAsterisk
          label="Password"
          placeholder="Enter your password"
          key={form.key('password')}
          visible={visible}
          onVisibilityChange={toggle}
          {...form.getInputProps('password')}
        />

        <Checkbox
          mt={12}
          label="Remeber me"
          key={form.key('rememberMe')}
          {...form.getInputProps('rememberMe')}
        />

        <Group justify="center" mt="md" w="100%">
          <BorderAnimate
            radius="xl"
            w="100%"
            variant="pulse"
            colorFrom="grape"
            colorTo="indigo"
            borderWidth="sm"
            duration={5}
          >
            <Button variant="default" bdrs="xl" w="100%" type="submit" color="dark">
              Continue
            </Button>
          </BorderAnimate>
        </Group>
      </form>
    </>
  );
};
