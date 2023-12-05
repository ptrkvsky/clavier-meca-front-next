import React from 'react';
import { Slice } from '../../../../interfaces/Slice';
import { ProductsSection } from '@/app/gql/graphql';
import { ProductWrapper } from '../ProductWrapper';

interface Props {
  slice: Slice;
}

export function SliceProducts({ slice }: Readonly<Props>) {
  const { products } = slice as ProductsSection;

  return (
    <section>
      {products?.map((product) => {
        return product && <ProductWrapper product={product} />;
      })}
    </section>
  );
}
