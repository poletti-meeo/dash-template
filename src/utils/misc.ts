import { StateCreator } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { modals } from '@mantine/modals';

export const createStore = <T>(state: StateCreator<T>) =>
  createWithEqualityFn<T>()(
    subscribeWithSelector<T>((...args) => state(...args)),
    shallow
  );

export const confirmModal = (
  title: string,
  children: React.ReactNode,
  labels: { confirm?: string; cancel?: string },
  cb: () => void,
  withCloseButton = false
) => {
  return () =>
    modals.openConfirmModal({
      title,
      children,
      labels: { confirm: labels?.confirm ?? 'Confirm', cancel: labels?.cancel ?? 'Cancel' },
      onConfirm: cb,
      withCloseButton,
    });
};
