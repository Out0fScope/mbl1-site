import { ComponentType, ReactNode } from 'react';

interface IModalContext {
  isOpen: boolean;
  openModal: <T extends object>(component: ComponentType<T>, props?: T) => void;
  closeModal: () => void;
}

interface IModalProviderProps {
  children: ReactNode;
}

export type { IModalContext, IModalProviderProps };
