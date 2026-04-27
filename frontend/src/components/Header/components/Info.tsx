'use client';

import { IContact } from '_api/types';
import useScroll from '_hooks/useScroll';
import { Clock4, MapPin, Phone } from 'lucide-react';

interface Props {
  contacts: IContact;
}

const Info = ({ contacts }: Props) => {
  const { scrollY } = useScroll();

  const isCompact = scrollY > 100;

  return (
    <div
      className={`hidden md:flex transition-all duration-300 py-2 ${
        isCompact ? 'flex-row items-center' : 'flex-col items-end gap-2'
      }`}
    >
      {/* Address */}
      <div className="w-full flex items-center gap-2">
        <MapPin
          className={`${isCompact ? 'hover:text-primary transition-color duration-300 cursor-pointer' : ''}`}
          onClick={() => {
            if (isCompact) window.scrollTo({ top: 0 });
          }}
          strokeWidth={1}
        />

        <span
          className={`
            transition-all duration-300 overflow-hidden whitespace-nowrap text-sm max-lg:text-xs
            ${isCompact ? 'opacity-0 max-w-0 translate-x-2' : 'opacity-100 translate-x-0'}
          `}
        >
          {contacts.address}
        </span>
      </div>

      {/* Time */}
      <div className="w-full flex items-center gap-2">
        <Clock4
          className={`${isCompact ? 'hover:text-primary transition-color duration-300 cursor-pointer' : ''}`}
          onClick={() => {
            if (isCompact) window.scrollTo({ top: 0 });
          }}
          strokeWidth={1}
        />
        <span
          className={`
            transition-all duration-300 overflow-hidden whitespace-nowrap text-sm max-lg:text-xs
            ${
              isCompact
                ? 'opacity-0 max-w-0 translate-x-2'
                : 'opacity-100 max-w-[220px] translate-x-0'
            }
          `}
        >
          с 09:00 до 18:00 Вых.: сб-вс
        </span>
      </div>

      {/* Phones */}
      <div className="w-full flex items-center gap-2">
        <Phone
          className={`${isCompact ? 'hover:text-primary transition-color duration-300 cursor-pointer' : ''}`}
          onClick={() => {
            if (isCompact) window.scrollTo({ top: 0 });
          }}
          strokeWidth={1}
        />

        <div
          className={`
            flex flex-col transition-all duration-300 overflow-hidden whitespace-nowrap
            ${
              isCompact
                ? 'opacity-0 max-h-0 translate-x-2'
                : 'opacity-100 max-h-[60px] translate-x-0'
            }
          `}
        >
          <a
            href={`tel:${contacts.phone1}`}
            className="hover:text-primary text-sm max-lg:text-xs transition-colors duration-300"
          >
            {contacts.phone1}
          </a>
          <a
            href={`tel:${contacts.phone2}`}
            className="hover:text-primary text-sm max-lg:text-xs transition-colors duration-300"
          >
            {contacts.phone2}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
