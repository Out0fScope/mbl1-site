'use client';

import Modal from '_components/Modal';
import { useRouter, useSearchParams } from 'next/navigation';
import { ComponentType, createContext, useState } from 'react';
import { IModalContext, IModalProviderProps } from './types';

const ModalContext = createContext<IModalContext | null>(null);

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<{
    component: ComponentType;
    props?: any;
  } | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const openModal = (component: ComponentType<any>, props?: any) => {
    if (props?.project) {
      const params = new URLSearchParams(searchParams);
      params.set('project', props.project.article);
      router.push(`?${params.toString()}`, {
        scroll: false,
      });
    }

    setModalConfig({ component, props });
    setIsOpen(true);
  };

  const closeModal = () => {
    const params = new URLSearchParams(searchParams);

    params.delete('project');

    router.push(`?${params.toString()}`, {
      scroll: false,
    });
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
