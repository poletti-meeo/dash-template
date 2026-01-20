'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Stack, Tabs, Title } from '@mantine/core';
import { UserManagementPage } from '@/components/settings';
import ProfileSettingsPage from '@/components/settings/profile/profile';
import SecuritySettingsPage from '@/components/settings/security/security';

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab') ?? 'profile';

  const handleTabChange = (value: string | null) => {
    router.replace(`/dashboard/settings?tab=${value}`);
  };

  return (
    <Stack>
      <Title order={2}>Settings</Title>

      <Tabs value={tab} onChange={handleTabChange}>
        <Tabs.List>
          <Tabs.Tab value="profile">Profile</Tabs.Tab>
          <Tabs.Tab value="security">Account security</Tabs.Tab>
          <Tabs.Tab value="users">Manage Users</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel
          value="profile"
          display="flex"
          flex={1}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <ProfileSettingsPage />
        </Tabs.Panel>
        <Tabs.Panel value="security">
          <SecuritySettingsPage />
        </Tabs.Panel>
        <Tabs.Panel value="users">
          <UserManagementPage />
        </Tabs.Panel>
      </Tabs>

      {children}
    </Stack>
  );
}
