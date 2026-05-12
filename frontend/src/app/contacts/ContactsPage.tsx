'use client';

import { IContacts } from '_api/types';
import OrderForm from '_components/OrderForm';
import { useScrollToTop } from '_hooks/useScrollToTop';
import InstagramIcon from '_icons/instagram.svg';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Map from './Map';

interface Props {
  contacts: IContacts;
}

const ContactsPage = ({ contacts }: Props) => {
  useScrollToTop();

  return (
    <section className="mb-16 scroll-mt-64 px-4 sm:px-12 lg:px-16 xl:px-24">
      <header className="py-[1rem] md:py-[2rem]">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
        {/* ЛЕВЫЙ БЛОК */}
        <div className="flex flex-col gap-6 h-full">
          {/* контакты */}
          <div className="bg-white border p-6 flex flex-col gap-6">
            <h2 className="text-xl font-semibold">Как с нами связаться</h2>

            {/* КОНТАКТЫ */}
            <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
              {/* ТЕЛЕФОН */}
              <div className="flex items-start gap-3">
                <Phone size={28} strokeWidth={1} />
                <div className="flex flex-col text-sm sm:text-base">
                  <span>{contacts.phone1}</span>
                  <span>{contacts.phone2}</span>
                </div>
              </div>

              {/* ПРАВАЯ ЧАСТЬ */}
              <div className="flex flex-col gap-4 md:flex-row sm:gap-6 lg:gap-4">
                {/* EMAIL */}
                <div className="flex items-center gap-2">
                  <Mail size={28} strokeWidth={1} />
                  <span className="text-sm sm:text-base break-all">{contacts.email}</span>
                </div>

                {/* INSTAGRAM */}
                <div className="flex items-center gap-2">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    priority
                    className="h-7 w-auto object-contain sm:h-8"
                  />
                  <span className="text-sm sm:text-base">@mbl_1_mebel</span>
                </div>
              </div>
            </div>
          </div>

          {/* карта */}
          <Map />
        </div>

        {/* ПРАВЫЙ БЛОК */}
        <div className="bg-white border p-6 flex items-center justify-center">
          <OrderForm onClose={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
