const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',

          name: 'MBL1',

          url: 'https://mbl1.by',
          sameAs: ['https://www.instagram.com/mbl_1_mebel'],
          foundingDate: '2018',
          email: 'mbl1@inbox.ru',

          logo: 'https://mbl1.by/logo.png',

          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+375296288131',
              contactType: 'customer service',
              areaServed: 'BY',
              availableLanguage: ['ru'],
            },
          ],

          address: {
            '@type': 'PostalAddress',
            addressCountry: 'BY',
            addressLocality: 'Минск',
            addressRegion: 'Минская область',
            postalCode: '220000',
            streetAddress: 'пер. Софьи Ковалевской, 54к1',
          },
        }),
      }}
    />
  );
};

export default OrganizationSchema;
