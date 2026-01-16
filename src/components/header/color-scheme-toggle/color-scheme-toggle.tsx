'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Tooltip, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <Tooltip label={computedColorScheme === 'dark' ? 'Light theme' : 'Dark theme'}>
      <ActionIcon
        onClick={() => {
          setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
        }}
        variant="outline"
        c={computedColorScheme === 'light' ? 'dark' : 'white'}
        color={computedColorScheme === 'light' ? 'dark' : 'white'}
      >
        {computedColorScheme === 'light' ? <IconMoon size={20} /> : <IconSun size={20} />}
      </ActionIcon>
    </Tooltip>
  );
}
