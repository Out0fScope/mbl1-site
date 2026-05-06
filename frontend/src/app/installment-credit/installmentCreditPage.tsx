'use client';

import OrderForm from '_components/OrderForm';
import useModal from '_hooks/useModal';
import { Banknote, CheckCircle, Clock, CreditCard, Percent } from 'lucide-react';

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-md border bg-white/70 backdrop-blur-md p-6 shadow-sm hover:shadow-xl transition-all duration-300">
    {children}
  </div>
);

const IconBox = ({ children }: { children: React.ReactNode }) => (
  <div className="p-2 rounded-xl bg-primary/10 text-primary">{children}</div>
);

const InstallmentCreditPage = () => {
  const { openModal, closeModal } = useModal();

  return (
    <section className="mb-20 scroll-mt-64 px-4 sm:px-12 lg:px-16 xl:px-24">
      {/* HEADER */}
      <header className="py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Рассрочка и кредит</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          Оформите мебель сейчас — платите позже на удобных условиях без лишней нагрузки
        </p>
      </header>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
        {/* LEFT */}
        <div className="flex flex-col gap-8">
          {/* РАССРОЧКА */}
          <Card>
            <h2 className="text-xl font-semibold mb-6">Рассрочка 0%</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <IconBox>
                  <Percent size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Без процентов</div>
                  <div className="text-sm text-gray-600">0% переплаты</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconBox>
                  <Clock size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Срок</div>
                  <div className="text-sm text-gray-600">до 6 месяцев</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconBox>
                  <CreditCard size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Договор</div>
                  <div className="text-sm text-gray-600">с нашей компанией</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconBox>
                  <Banknote size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Оплата</div>
                  <div className="text-sm text-gray-600">онлайн или наличными</div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Свяжитесь с нами — подберём удобный вариант оплаты.
            </div>
          </Card>

          {/* КРЕДИТ */}
          <Card>
            <h2 className="text-xl font-semibold mb-6">Кредит через банк</h2>

            <div className="flex items-center gap-3 mb-6 text-sm text-gray-500">
              <CreditCard size={18} />
              Беларускi народный банк
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <IconBox>
                  <Percent size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Ставка</div>
                  <div className="text-sm text-gray-600">
                    4% первые 6 месяцев <br /> 17,81% далее
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconBox>
                  <Banknote size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Сумма</div>
                  <div className="text-sm text-gray-600">до 40 000 BYN</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconBox>
                  <Clock size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Срок</div>
                  <div className="text-sm text-gray-600">2–5 лет</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IconBox>
                  <CheckCircle size={20} />
                </IconBox>
                <div>
                  <div className="font-medium">Покрытие</div>
                  <div className="text-sm text-gray-600">до 100%</div>
                </div>
              </div>
            </div>
          </Card>

          {/* ПРЕИМУЩЕСТВА */}
          <Card>
            <h2 className="text-xl font-semibold mb-6">Почему это удобно</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Оформление через приложение',
                'Без визита в отделение',
                'Быстрое одобрение',
                'Гибкие условия оплаты',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <IconBox>
                    <CheckCircle size={18} />
                  </IconBox>
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* RIGHT (STICKY) */}
        <div className="lg:sticky lg:top-32 h-fit">
          <div className="rounded-md bg-gradient-to-br from-primary/10 to-white border p-6 shadow-lg">
            <h3 className="font-semibold mb-6 text-lg">Варианты оплаты</h3>

            <div className="flex flex-col gap-5 text-sm">
              <div>
                <div className="text-gray-500">Рассрочка</div>
                <div className="font-medium text-lg">0%</div>
              </div>

              <div>
                <div className="text-gray-500">Кредит</div>
                <div className="font-medium text-lg">4% → 17,81%</div>
              </div>

              <div>
                <div className="text-gray-500">Сумма</div>
                <div className="font-medium text-lg">до 40 000 BYN</div>
              </div>
            </div>

            <button
              className="mt-8 block text-center px-6 py-3 bg-black text-white font-medium transition-all duration-300 hover:bg-primary cursor-pointer"
              onClick={() => openModal(OrderForm, { onClose: closeModal })}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="mt-12 text-xs text-gray-400">РВСР: 1.11 п.п. Условия уточняются банком.</div>
    </section>
  );
};

export default InstallmentCreditPage;
