'use client';

import useBreadCrumbs from '_hooks/useBreadCrumbs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const { breadcrumbs } = useBreadCrumbs();

  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <>
      {/* SEO structured data */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: crumb.name,
              item: `https://steelmania.by${crumb.href}`,
            })),
          }),
        }}
      /> */}

      <nav aria-label="Breadcrumb" className="text-sm mt-32 ml-8">
        <ol className="flex flex-wrap items-center gap-2 text-muted">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={crumb.href} className="flex items-center gap-2">
                {!isLast ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-primary transition-colors underline"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.name}</span>
                )}

                {!isLast && <span>/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
