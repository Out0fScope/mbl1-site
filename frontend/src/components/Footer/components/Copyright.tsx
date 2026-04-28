import { IContacts } from 'src/lib/api/types';

const Copyright = ({ contacts }: { contacts: IContacts }) => {
  return (
    <div className="flex flex-col pt-[1rem]">
      <p className="text-center text-xl text-muted/50">© {new Date().getFullYear()} MBL1</p>
      <p className="text-sm text-muted/50"> УНП: XXXXXXXXX, {contacts.address}</p>
    </div>
  );
};

export default Copyright;
