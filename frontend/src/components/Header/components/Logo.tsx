import Icon from '_icons/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_ALT = 'Главная Mbl1';

const Logo = () => {
  return (
    <Link href="/" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image src={Icon} alt={IMAGE_ALT} priority className="h-12 w-auto object-contain" />
    </Link>
  );
};

export default Logo;
