import { IContact } from '_api/types';
import { Clock4, MapPin, Phone } from 'lucide-react';

interface Props {
  contacts: IContact;
}

const Info = ({ contacts }: Props) => {
  return (
    <div className="hidden md:flex flex-col justify-between py-2">
      <div className="flex items-end gap-2">
        <MapPin strokeWidth={1} />
        <span className="text-sm max-lg:text-xs">{contacts.address}</span>
      </div>
      <div className="flex items-end gap-2">
        <Clock4 strokeWidth={1} />
        <span className="text-sm max-lg:text-xs"> с 09:00 до 18:00 Вых.: сб-вс</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone strokeWidth={1} />
        <span className="flex flex-col">
          <a
            href={`tel:${contacts.phone1}`}
            rel="noopener noreferrer"
            className="hover:text-primary text-sm max-lg:text-xs transition-colors duration-300"
          >
            {contacts.phone1}
          </a>
          <a
            href={`tel:${contacts.phone1}`}
            rel="noopener noreferrer"
            className="hover:text-primary text-sm max-lg:text-xs transition-colors duration-300"
          >
            {contacts.phone2}
          </a>
        </span>
      </div>
    </div>
  );
};

export default Info;
