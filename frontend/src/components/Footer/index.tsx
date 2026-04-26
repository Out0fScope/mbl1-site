import Api from '_Api';
import { Collection } from 'src/lib/api/types';
import Copyright from './components/Copyright';
import Info from './components/Info';
import Navigation from './components/Navigation';

const Footer = async () => {
  const contacts = (await Api.getData(Collection.Contacts))[0];

  if (!contacts) return null;

  return (
    <footer className="pt-16 pb-16 bg-background/95 shadow-[0_-10px_20px_rgba(0,0,0,0.2)] z-10 text-foreground cursor-default">
      <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16">
        {/* Основной блок с информацией и навигацией */}
        <div className="flex flex-col lg:flex-row justify-between gap-[2.5rem] pb-[1rem] w-full max-w-[80rem] border-b border-muted">
          {/* Информация */}
          <Info contacts={contacts} />

          {/* Навигация */}
          <Navigation />
        </div>

        {/* Copyright */}
        <Copyright contacts={contacts} />
      </div>
    </footer>
  );
};

export default Footer;
