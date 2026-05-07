'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import UploadZone from './UploadZone';
import { createOrder, uploadFile } from '_helpers/client-fetch-helper';

interface OrderFormProps {
  title?: string;
  onClose: () => void;
}

const OrderForm = ({ title, onClose }: OrderFormProps) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    description: title ? 'Ориентировочный проект: ' + title : '',
    image: null,
    designer: false,
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let imageResult = null;

      if (file) {
        const uploaded = await uploadFile(file);
        imageResult = uploaded.data.id;
      }

      const payload = {
        ...form,
        image: imageResult,
      };

      await createOrder(payload);

      setForm({
        name: '',
        phone: '',
        email: '',
        description: '',
        image: null,
        designer: false,
      });

      setFile(null);
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      className="bg-white w-full max-w-lg p-6 relative"
      onClick={(e) => e.stopPropagation()} // чтобы клик не закрывал модалку
    >
      {/* ❌ кнопка закрытия */}
      <button
        onClick={onClose}
        className="
          absolute top-4 right-4 z-20
          p-2 rounded-full
          bg-black/50 text-white
          backdrop-blur
          hover:bg-black/70 hover:scale-110
          transition-all duration-200 cursor-pointer
        "
      >
        <X size={20} />
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
          <input type="checkbox" name="designer" checked={form.designer} onChange={handleChange} />
          Нужен выезд замерщика / дизайнера
        </label>

        {/* Кнопка */}
        <button
          type="submit"
          className="bg-black text-white py-2 hover:opacity-80 transition cursor-pointer"
        >
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
