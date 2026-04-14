'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import UploadZone from './UploadZone';

type Props = {
  onClose: () => void;
};

const OrderForm = ({ onClose }: Props) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
    needVisit: false,
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('FORM DATA:', form);
    console.log('FILE:', file);

    // сюда потом API (Directus или backend)
    onClose();
  };

  return (
    <div
      className="bg-white w-full max-w-lg p-6 relative"
      onClick={(e) => e.stopPropagation()} // чтобы клик не закрывал модалку
    >
      {/* ❌ кнопка закрытия */}
      <button
        className="absolute top-3 right-3 text-xl cursor-pointer hover:bg-muted/30"
        onClick={onClose}
      >
        <X />
      </button>

      <h2 className="text-xl mb-4 font-semibold">Оставьте заявку</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Имя */}
        <input
          type="text"
          name="name"
          placeholder="Как к Вам обращаться"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
          required
        />

        {/* Телефон */}
        <input
          type="tel"
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
          className="border p-2"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email (необязательно)"
          value={form.email}
          onChange={handleChange}
          className="border p-2"
        />

        {/* Описание */}
        <textarea
          name="description"
          placeholder="Описание заказа"
          value={form.description}
          onChange={handleChange}
          className="border p-2 min-h-[100px]"
        />

        {/* Файл */}
        <UploadZone onFileSelect={setFile} />

        {/* Чекбокс */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="needVisit"
            checked={form.needVisit}
            onChange={handleChange}
          />
          Нужен выезд замерщика / дизайнера
        </label>

        {/* Кнопка */}
        <button type="submit" className="bg-black text-white py-2 hover:opacity-80 transition">
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
