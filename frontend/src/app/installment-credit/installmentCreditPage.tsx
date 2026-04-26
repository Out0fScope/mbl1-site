'use client';

import Link from 'next/link';

const InstallmentCreditPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="px-4 md:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">Рассрочка и кредит на мебель</h1>

        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mb-8">
          Закажите мебель уже сегодня и оплачивайте постепенно. Без переплат и скрытых условий.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-accent-hover transition">
            Оставить заявку
          </button>

          <Link
            href="#conditions"
            className="border border-border px-6 py-3 rounded-md font-medium hover:bg-hover transition text-center"
          >
            Условия
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-secondary text-white py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">0% переплаты</h3>
            <p className="text-white/70">
              Рассрочка без дополнительных процентов напрямую от нашей компании
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">До 6 месяцев</h3>
            <p className="text-white/70">Удобный срок выплат без нагрузки на бюджет</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Быстрое оформление</h3>
            <p className="text-white/70">Оформление заявки занимает не более 10 минут</p>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section id="conditions" className="py-16 px-4 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Условия оформления</h2>

        <ul className="space-y-3">
          {[
            'Гражданство РБ',
            'Возраст от 18 лет',
            'Паспорт или ID-карта',
            'Первый взнос от 0%',
          ].map((item, i) => (
            <li key={i} className="list-disc pl-5 marker:text-accent text-lg">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 px-4 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Как оформить</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            'Оставьте заявку на сайте',
            'Мы свяжемся с вами',
            'Подберем удобный вариант',
            'Доставим и установим мебель',
          ].map((step, i) => (
            <div key={i} className="p-6 border border-border rounded-xl">
              <p className="text-sm text-neutral-500 mb-2">Шаг {i + 1}</p>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Оставьте заявку и получите расчет уже сегодня
          </h2>

          <p className="text-white/70 mb-8">
            Наш специалист свяжется с вами и подберёт лучший вариант оплаты
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-neutral-200 transition">
            Оставить заявку
          </button>
        </div>
      </section>
    </main>
  );
};

export default InstallmentCreditPage;
