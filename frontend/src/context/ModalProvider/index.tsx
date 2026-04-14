'use client';

import Modal from '_components/Modal';
import { ComponentType, createContext, useState } from 'react';
import { IModalContext, IModalProviderProps } from './types';

const ModalContext = createContext<IModalContext | null>(null);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<{
    component: ComponentType;
    props?: any;
  } | null>(null);

  const openModal = (component: ComponentType<any>, props?: any) => {
    setModalConfig({ component, props });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalConfig(null);
  };

  const value: IModalContext = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={value}>
      <Modal open={isOpen} onClose={closeModal}>
        {modalConfig && <modalConfig.component {...modalConfig.props} />}
      </Modal>

      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
