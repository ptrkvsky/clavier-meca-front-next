import React from 'react';
import { Slice } from '@/app/(features)/article/[slug]/interfaces/Slice';
import { ProductsSection } from '@/app/gql/graphql';
import { ProductWrapper } from '@/app/(features)/article/[slug]/components/slices/sliceProducts/ProductWrapper/index';
import { styleSection } from './SliceProducts.css';

interface Props {
  slice: Slice;
}

export function SliceProducts({ slice }: Readonly<Props>) {
  const { products } = slice as ProductsSection;

  return (
    <section className={styleSection}>
      {products?.map((product) => {
        return product && <ProductWrapper product={product} />;
      })}
    </section>
  );
}
