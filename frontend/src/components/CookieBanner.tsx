'use client';

import { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookie_consent';

type Consent = 'accepted' | 'rejected' | null;

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY) as Consent;
    const func = async (bool: boolean) => setVisible(bool);

    if (!saved) func(true);
  }, []);

  const setConsent = (value: Consent) => {
    localStorage.setItem(COOKIE_KEY, value || '');
    setVisible(false);

    // уведомляем систему
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-xl bg-white border shadow-lg p-4 rounded-xl z-[9999]">
      <p className="text-sm text-neutral-700 mb-3">
        Мы используем cookies для улучшения работы сайта и аналитики.
      </p>

      <div className="flex gap-2 justify-end">
        <button onClick={() => setConsent('rejected')} className="px-3 py-2 border rounded text-sm">
          Отклонить
        </button>

        <button
          onClick={() => setConsent('accepted')}
          className="px-3 py-2 bg-black text-white rounded text-sm"
        >
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
