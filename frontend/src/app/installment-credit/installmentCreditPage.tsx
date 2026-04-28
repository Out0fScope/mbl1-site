'use client';

import { Banknote, CheckCircle, Clock, CreditCard, Percent, Smartphone } from 'lucide-react';
import Link from 'next/link';

const InstallmentCreditPage = () => {
  return (
    <section className="mb-16 scroll-mt-64 px-4 sm:px-12 lg:px-16 xl:px-24">
      {/* HEADER */}
      <header className="py-[1rem] md:py-[2rem]">
        <h1 className="text-4xl font-bold mb-4">Рассрочка и кредит</h1>
        <p className="text-lg text-gray-600">
          Оформите мебель сейчас — платите позже на удобных условиях
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* LEFT */}
        <div className="flex flex-col gap-10">
          {/* РАССРОЧКА */}
          <div className="border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary">
            <h2 className="text-xl font-semibold mb-6">Рассрочка 0%</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Percent size={22} />
                <div>
                  <div className="font-medium">Без процентов</div>
                  <div className="text-sm text-gray-600">0% переплаты на весь срок</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={22} />
                <div>
                  <div className="font-medium">Срок</div>
                  <div className="text-sm text-gray-600">до 6 месяцев</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard size={22} />
                <div>
                  <div className="font-medium">Договор</div>
                  <div className="text-sm text-gray-600">напрямую с нашей компанией</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Banknote size={22} />
                <div>
                  <div className="font-medium">Оплата</div>
                  <div className="text-sm text-gray-600">интернет-банкинг или наличные</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              Для уточнения условий свяжитесь с нами — подберём удобный вариант оплаты.
            </div>
          </div>

          {/* КРЕДИТ */}
          <div className="border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary">
            <h2 className="text-xl font-semibold mb-6">Кредит через банк</h2>

            <div className="flex items-center gap-3 mb-6 text-sm text-gray-600">
              <CreditCard size={18} />
              Беларускi народный банк
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Percent size={22} />
                <div>
                  <div className="font-medium">Ставка</div>
                  <div className="text-sm text-gray-600">
                    4% первые 6 месяцев
                    <br />
                    17,81% далее
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Banknote size={22} />
                <div>
                  <div className="font-medium">Сумма</div>
                  <div className="text-sm text-gray-600">от 100 до 40 000 BYN</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={22} />
                <div>
                  <div className="font-medium">Срок</div>
                  <div className="text-sm text-gray-600">2, 3 или 5 лет</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={22} />
                <div>
                  <div className="font-medium">Покрытие</div>
                  <div className="text-sm text-gray-600">до 100% стоимости мебели</div>
                </div>
              </div>
            </div>
          </div>

          {/* ПРЕИМУЩЕСТВА */}
          <div className="border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary">
            <h2 className="text-xl font-semibold mb-6">Почему это удобно</h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Smartphone size={22} />
                <span className="text-gray-700">Оформление через приложение банка</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={22} />
                <span className="text-gray-700">Без визита в отделение</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={22} />
                <span className="text-gray-700">Быстрое одобрение</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle size={22} />
                <span className="text-gray-700">Гибкие условия оплаты</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="border p-6 flex flex-col justify-between lg:sticky lg:top-32 h-fit">
          <div>
            <h3 className="font-semibold mb-6">Варианты оплаты</h3>

            <div className="flex flex-col gap-6 text-sm">
              <div>
                <div className="text-gray-500">Рассрочка</div>
                <div className="font-medium">0% до 6 месяцев</div>
              </div>

              <div>
                <div className="text-gray-500">Кредит</div>
                <div className="font-medium">4% → 17,81%</div>
              </div>

              <div>
                <div className="text-gray-500">Сумма</div>
                <div className="font-medium">до 40 000 BYN</div>
              </div>
            </div>
          </div>

          <Link
            href="/contacts"
            className="mt-10 block text-center px-6 py-3 border border-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Оформить
          </Link>
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-12 text-xs text-gray-500">
        РВСР: 1.11 процентных пункта. Условия уточняются банком.
      </div>
    </section>
  );
};

export default InstallmentCreditPage;
