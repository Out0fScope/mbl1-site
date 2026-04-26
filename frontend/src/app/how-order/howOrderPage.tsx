'use client';

import Link from 'next/link';

const steps = [
  {
    title: 'Оставьте заявку',
    text: 'Заполните форму на сайте или свяжитесь с нами любым удобным способом',
  },
  {
    title: 'Консультация',
    text: 'Мы уточним детали, подберём решения и ответим на все вопросы',
  },
  {
    title: 'Замер и дизайн',
    text: 'Наш специалист приедет к вам, сделает замеры и предложит оптимальный вариант',
  },
  {
    title: 'Договор и производство',
    text: 'Заключаем договор и запускаем мебель в производство',
  },
  {
    title: 'Доставка и установка',
    text: 'Доставим и аккуратно установим мебель у вас дома',
  },
];

const HowOrderPage = () => {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="px-4 md:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6">Как заказать мебель</h1>

        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl">
          Всего несколько шагов — и ваша мебель уже в процессе создания
        </p>
      </section>

      {/* Steps */}
      <section className="px-4 md:px-16 pb-16 md:pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 border border-border rounded-2xl bg-white"
            >
              {/* Number */}
              <div className="absolute -top-4 left-6 bg-accent text-white text-sm px-3 py-1 rounded-full">
                Шаг {index + 1}
              </div>

              <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>

              <p className="text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline (альтернатива на десктопе) */}
      <section className="hidden lg:block px-16 pb-24 max-w-6xl mx-auto">
        <div className="relative border-l border-border pl-8 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[10px] top-1 w-4 h-4 bg-accent rounded-full" />
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-neutral-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white py-16 px-4 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Готовы начать?</h2>

          <p className="text-white/70 mb-8">Оставьте заявку — мы поможем реализовать ваш проект</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-neutral-200 transition">
              Оставить заявку
            </button>

            <Link
              href="/installment"
              className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
            >
              Рассрочка и кредит
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowOrderPage;
