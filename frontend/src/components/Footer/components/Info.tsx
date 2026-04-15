import Link from 'next/link';
import { IContact } from 'src/lib/api/types';

const Info = ({ contacts }: { contacts: IContact }) => {
  return (
    <div className="flex flex-col gap-[0.5rem] max-w-xs">
      <span className="text-4xl font-bold">MeBeL1</span>
      <span className="text-muted text-sm mb-[0.5rem]">
        Отправляя формы на сайте, вы соглашаетесь на обработку персональных данных, защищенных{' '}
        <Link href="#" className="underline text-muted/50 hover:text-primary">
          политикой конфиденциальности
        </Link>
      </span>
      <span className="text-sm leading-2">{contacts?.email}</span>
      <span className="text-sm">{contacts?.phone1}</span>
      <span className="text-sm">{contacts?.phone2}</span>
    </div>
  );
};

export default Info;
