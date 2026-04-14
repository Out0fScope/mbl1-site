import { IContacts } from '_api/types';
import { Mail, Phone } from 'lucide-react';

const Contacts = async ({ contacts }: { contacts: IContacts }) => {
  return (
    <div className="flex flex-col items-start text-sm">
      <p className="flex items-start gap-2">
        <Phone className="w-4 h-4 text-primary" />
        <a href={`tel: ${contacts.phone}`} className="hover:underline">
          {contacts.phone}
        </a>
      </p>
      <p className="flex items-start gap-2">
        <Mail className="w-4 h-4 text-primary" />
        <a href={`mailto: ${contacts?.email}`} className="hover:underline">
          {contacts?.email}
        </a>
      </p>
      <div className="flex gap-2">
        <a
          key={'Telegram'}
          href={`${contacts?.telegram}`}
          target={'_blank'}
          rel="noopener noreferrer"
          aria-label={'Перейти в Telegram Мания Стали'}
          className="text-primary hover:text-foreground transition duration-300"
        >
          Telegram
        </a>
        <a
          key={'Viber'}
          href={`${contacts?.viber}`}
          target={'_blank'}
          rel="noopener noreferrer"
          aria-label={'Ссылка на Viber'}
          className="text-primary hover:text-foreground transition duration-300"
        >
          Viber
        </a>
      </div>

      <p className="text-foreground mt-2">
        <span className="text-primary">УНП:</span> <span className="font-semibold">193820655</span>
      </p>
    </div>
  );
};

export default Contacts;
