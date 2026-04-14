'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { IModalProps } from './types';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Modal = ({ open, onClose, children }: IModalProps) => {
  /* scroll blocking */
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  /* close on ESC */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 bg-gradient-to-b from-black/60 via-black/40 to-black/60 
                     backdrop-blur-sm flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={onClose}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
