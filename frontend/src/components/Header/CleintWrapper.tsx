'use client';

import CTAButton from '_components/Header/components/CTAButton';
import useScroll from '_hooks/useScroll';
import InstagramIcon from '_icons/instagram.svg';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { ICategory, IContact } from 'src/lib/api/types';
import BurgerButton from './components/BurgerButton';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

interface HeaderProps {
  contacts: IContact;
  categories: ICategory[];
}

const CleintHeader = ({ contacts, categories }: HeaderProps) => {
  const { scrollY } = useScroll();

  const opacity = Math.min(scrollY / 120, 1);

  return (
    <header
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
      }}
      className={`fixed top-0 left-0 w-full z-50`}
    >
      <div
        style={{
          boxShadow: `0 4px 20px rgba(0, 0, 0, ${opacity * 0.2})`,
        }}
        className={`max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-18 h-24`}
      >
        <Logo />
        <Navigation categories={categories} />
        <div className="hidden md:flex">
          <div id="socials" className="absolute hidden lg:right-56 xl:right-62 xl:flex gap-1">
            <div className="group flex items-center overflow-hidden cursor-pointer">
              <Phone size={32} strokeWidth={1} className="transition-transform duration-300" />

              <span
                className="
                flex
                flex-col
                max-w-0
                opacity-0
                ml-0
                whitespace-nowrap
                transition-all
                duration-500
                group-hover:max-w-[200px]
                group-hover:opacity-100
                group-hover:ml-2
              "
              >
                <span>{contacts.phone1}</span>
                <span>{contacts.phone2}</span>
              </span>
            </div>
            <div className="group flex items-center overflow-hidden cursor-pointer">
              <Mail size={36} strokeWidth={1} className="transition-transform duration-300" />
              <span
                className="
                          max-w-0
                          opacity-0
                          ml-0
                          whitespace-nowrap
                          transition-all
                          duration-500
                          group-hover:max-w-[200px]
                          group-hover:opacity-100
                          group-hover:ml-2
                        "
              >
                {contacts.email}
              </span>
            </div>
            <div className="group flex items-center overflow-hidden cursor-pointer">
              <Image
                src={InstagramIcon}
                alt="Instagram"
                priority
                className="transition-transform duration-300 h-[34px] w-auto object-contain"
              />
              <span
                className="
                          max-w-0
                          opacity-0
                          ml-0
                          whitespace-nowrap
                          transition-all
                          duration-500
                          group-hover:max-w-[200px]
                          group-hover:opacity-100
                          group-hover:ml-2
                        "
              >
                @mbl_1_mebel
              </span>
            </div>
          </div>
          <CTAButton />
        </div>
        <BurgerButton />
      </div>
    </header>
  );
};

export default CleintHeader;
