'use client';

import useScroll from '_hooks/useScroll';
import Icon from '_icons/logo.png';
import { Pages } from '_types/navigation';
import Image from 'next/image';
import Link from 'next/link';

const IMAGE_ALT = 'Главная Mbl1';

const Logo = () => {
  const { scrollY } = useScroll();

  const isCompact = scrollY > 100;

  return (
    <Link
      href={Pages.home}
      className={`
        md:absolute md:left-1/2 md:-translate-x-1/2
        transition-all duration-300 ease-out
        ${
          isCompact
            ? 'md:top-0 md:-translate-y-0 scale-80'
            : 'md:top-1/3 md:-translate-y-1/2 scale-100'
        }
      `}
      onClick={() => {
        if (isCompact) window.scrollTo({ top: 0 });
      }}
    >
      <Image
        src={Icon}
        alt={IMAGE_ALT}
        priority
        className="h-10 lg:h-12 w-auto object-contain transition-all duration-300"
      />
    </Link>
  );
};

export default Logo;
