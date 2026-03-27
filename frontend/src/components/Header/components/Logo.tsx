import Icon from '_icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_ALT = 'Главная Mbl1';

const Logo = () => {
  return (
    <Link href="/" className="overflow-hidden rounded-md flex items-center justify-center">
      <Image src={Icon} alt={IMAGE_ALT} priority className="h-12 w-auto object-contain" />
    </Link>
  );
};

export default Logo;
