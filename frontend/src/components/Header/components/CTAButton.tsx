'use client';

import OrderForm from '_components/OrderForm';
import useModal from '_hooks/useModal';
import { Mail } from 'lucide-react';

const CTAButton = () => {
  const { openModal, closeModal } = useModal();

  return (
    <button
      className="btn-7  max-xl:text-sm"
      onClick={() => openModal(OrderForm, { onClose: closeModal })}
    >
      <div className="arrow-layer">
        <Mail size={32} strokeWidth={1} />
      </div>
      <span>Оставить заявку</span>
    </button>
  );
};

export default CTAButton;
