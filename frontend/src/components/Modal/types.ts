import { ReactNode } from 'react';

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export type { IModalProps };
