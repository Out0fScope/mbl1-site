interface ProductSchemaProps {
  name: string;
  description?: string;
  image?: string;
  price?: number;
  currency?: string;
  url: string;
  inStock?: boolean;
}

const ProductSchema = ({
  name,
  description,
  image,
  price,
  currency = 'BYN',
  url,
  inStock = true,
}: ProductSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',

    name,
    description,

    image: image ? [image] : undefined,

    offers: {
      '@type': 'Offer',
      url,
      price: price ?? undefined,
      priceCurrency: currency,
      availability: inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
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

export default ProductSchema;
