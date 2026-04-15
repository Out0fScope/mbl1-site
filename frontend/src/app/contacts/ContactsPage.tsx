'use client';

import { IContact } from '_api/types';
import OrderForm from '_components/OrderForm';
import InstagramIcon from '_icons/instagram.svg';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import Map from './Map';

interface Props {
  contacts: IContact;
}

const ContactsPage = ({ contacts }: Props) => {
  return (
    <section className="cursor-default scroll-mt-64">
      <header className="py-[1rem] md:py-[2rem]">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ЛЕВЫЙ БЛОК */}
        <div className="flex flex-col gap-6 h-full">
          {/* контакты */}
          <div className="bg-white border p-6 flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Связаться с нами</h2>
            <div className="flex justify-around">
              <div className="flex items-center gap-3">
                <Phone size={32} strokeWidth={1} />
                <div className="flex flex-col">
                  <span>{contacts.phone1}</span>
                  <span>{contacts.phone2}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <Mail size={36} strokeWidth={1} />
                  <span>{contacts.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src={InstagramIcon}
                    alt="Instagram"
                    priority
                    className="h-[36px] w-auto object-contain"
                  />
                  <span>@mbl_1_mebel</span>
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
