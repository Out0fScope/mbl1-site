'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { createContext, useEffect, useState } from 'react';
import { ILoadingContext, ILoadingProviderProps } from './types';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const LoadingContext = createContext<ILoadingContext | null>(null);

const LoadingProvider = ({ children }: ILoadingProviderProps) => {
  const [showLoading, setShowLoading] = useState(true);
  const pathname = usePathname();
  const firstSegment = pathname.split('/')[1];

  useEffect(() => {
    setShowLoading(true);

    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [firstSegment]);

  return (
    <LoadingContext.Provider value={null}>
      <AnimatePresence mode="wait">
        {showLoading && (
          <motion.div
            key={pathname}
            className="fixed inset-0 z-100 bg-white
                       flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="visible"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <span className="loader z-10"></span>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider };
