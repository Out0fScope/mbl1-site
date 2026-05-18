const ServiceSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',

    name: 'Мебель на заказ в Минске',

    provider: {
      '@type': 'Organization',
      name: 'MBL1',
      url: 'https://mbl1.by',
    },

    areaServed: {
      '@type': 'Country',
      name: 'BY',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default ServiceSchema;
