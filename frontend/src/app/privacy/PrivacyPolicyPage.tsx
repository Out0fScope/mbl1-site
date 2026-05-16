'use client';

import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <section
      className="max-w-6xl
  mx-auto

  px-4 sm:px-6 lg:px-8
  py-10 sm:py-14 lg:py-16

  text-sm
  leading-relaxed
  text-neutral-800
"
    >
      <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

      <p className="mb-4">
        Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
        данных пользователей сайта MeBeL1 (далее — «Сайт»).
      </p>

      <p className="mb-4">
        Используя Сайт и заполняя любые формы, пользователь выражает согласие на обработку своих
        персональных данных в соответствии с законодательством Республики Беларусь.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Персональные данные</h2>

      <p className="mb-4">
        К персональным данным относятся: имя, номер телефона, адрес электронной почты, а также иная
        информация, которую пользователь добровольно предоставляет через формы на Сайте.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. Цели обработки данных</h2>

      <ul className="list-disc pl-5 space-y-1 mb-4">
        <li>обработка заявок и обратной связи</li>
        <li>консультация пользователей</li>
        <li>заключение и исполнение договоров</li>
        <li>улучшение качества обслуживания</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Защита данных</h2>

      <p className="mb-4">
        Администрация Сайта принимает все необходимые организационные и технические меры для защиты
        персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Передача третьим лицам</h2>

      <p className="mb-4">
        Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных
        законодательством Республики Беларусь.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Использование cookies</h2>

      <p className="mb-4">
        Сайт может использовать cookies для улучшения пользовательского опыта и аналитики.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Согласие пользователя</h2>

      <p className="mb-4">
        Пользователь, отправляя любую форму на Сайте, подтверждает своё согласие с данной Политикой
        конфиденциальности.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Контакты</h2>

      <p className="mb-2">По вопросам обработки персональных данных вы можете связаться с нами:</p>

      <div className="flex flex-col gap-1">
        <span>Email: info@mebel1.by</span>
        <span>Телефон: +375 XX XXX XX XX</span>
      </div>

      <div className="mt-10 text-xs text-neutral-500">Последнее обновление: 2026</div>

      <div className="mt-6">
        <Link href="/" className="text-primary underline">
          ← Вернуться на сайт
        </Link>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
