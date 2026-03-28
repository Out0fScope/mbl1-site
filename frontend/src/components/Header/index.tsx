// 'use client';

import Api from '_Api';
import CTAButton from '_components/Header/components/CTAButton';
import InstagramIcon from '_icons/instagram.svg';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { Collection } from 'src/lib/api/types';
import Logo from './components/Logo';
import Navigation from './components/Navigation';

const Header = async () => {
  const contacts = (await Api.getData(Collection.Contacts))[0];
  const categories = await Api.getData(Collection.Categories);

  // const { scrollY } = useScroll();

  // const opacity = Math.min(scrollY / 160, 1);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-background`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-24 h-24">
        <Logo />
        <Navigation categories={categories} />
        <div className="flex items-end gap-4">
          <div id="socials" className="absolute flex gap-1 bottom-[1.25rem] right-[18rem]">
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
      </div>
    </header>
  );
};

export default Header;
