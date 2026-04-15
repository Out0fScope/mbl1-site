import { IContact } from '_api/types';
import InstagramIcon from '_icons/instagram.svg';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import CTAButton from './CTAButton';

interface Props {
  contacts: IContact;
}

const Contacts = ({ contacts }: Props) => {
  return (
    <div className="hidden md:flex h-full">
      <div id="socials" className="flex flex-col justify-between py-4">
        <div className="flex flex-col gap-2 mb-2">
          <div className="flex gap-2">
            <Mail strokeWidth={1} />
            <a
              href={`mailto:${contacts.email}`}
              className="hover:text-primary transition-colors duration-300"
            >
              {contacts.email}
            </a>
          </div>
          <div className="flex gap-2">
            <Image
              src={InstagramIcon}
              alt="Instagram"
              priority
              className="transition-colors duration-300  w-auto object-contain"
            />
            <a
              href="https://instagram.com/mbl_1_mebel"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
            >
              @mbl_1_mebel
            </a>
          </div>
        </div>
        <CTAButton />
      </div>
    </div>
  );
};

export default Contacts;
