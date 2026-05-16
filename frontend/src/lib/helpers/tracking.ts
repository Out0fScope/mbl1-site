const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const initAnalytics = () => {
  if (!GA_ID) return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;

  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];

    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    // @ts-ignore
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_ID);
  };
};
