'use client';

import { IContacts } from '_api/types';
import { useMediaQuery } from '_hooks/useMatchMedia';
import InstagramIcon from '_icons/instagram.svg';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import CTAButton from './CTAButton';

interface Props {
  contacts: IContacts;
  isCompact: boolean;
  forceVisible?: boolean;
}

const Contacts = ({ contacts, isCompact, forceVisible }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className={`${isMobile && !forceVisible ? 'hidden' : ''}`}>
      <div
        className={`md:flex transition-all duration-300 ${
          isCompact ? 'flex-row items-center' : 'flex-col gap-1'
        } ${forceVisible ? 'flex' : 'hidden'}`}
      >
        {/* Contacts */}
        <div
          className={`flex transition-all duration-300 ${
            isCompact ? 'flex-row items-center' : 'flex-col gap-1'
          } max-lg:text-sm`}
        >
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail
              className={`${isCompact ? 'hover:text-primary transition-color duration-300 cursor-pointer' : ''}`}
              onClick={() => {
                if (isCompact) window.scrollTo({ top: 0 });
              }}
              strokeWidth={1}
            />

            <a
              href={`mailto:${contacts.email}`}
              className={`
                transition-all duration-300 overflow-hidden whitespace-nowrap
                ${
                  isCompact
                    ? 'opacity-0 max-w-0 translate-x-2'
                    : 'opacity-100 max-w-[200px] translate-x-0'
                }
                hover:text-primary
              `}
            >
              {contacts.email}
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-2">
            <Image
              src={InstagramIcon}
              alt="Instagram"
              width={25}
              height={25}
              priority
              className={`object-contain ${isCompact ? 'hover:text-primary transition-color duration-300 cursor-pointer' : ''}`}
              onClick={() => {
                if (isCompact) window.scrollTo({ top: 0 });
              }}
            />

            <a
              href="https://instagram.com/mbl_1_mebel"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                transition-all duration-300 overflow-hidden whitespace-nowrap
                ${
                  isCompact
                    ? 'opacity-0 max-w-0 translate-x-2'
                    : 'opacity-100 max-w-[200px] translate-x-0'
                }
                hover:text-primary
              `}
            >
              @mbl_1_mebel
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className={`transition-all duration-300 ${isCompact ? 'scale-90' : 'scale-100'}`}>
          <CTAButton />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
