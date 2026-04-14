import { ScrollContext } from '_context/ScrollProvider';
import { useContext } from 'react';

const useModal = () => {
  const context = useContext(ScrollContext);

  if (!context) throw new Error('useScroll must be used within a ScrollProvider');

  return context;
};

export default useModal;
