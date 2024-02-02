import { ProductBlock } from '@/app/gql/graphql';
import React from 'react';
import { styleProductWrapper } from './ProductWrapper.css';
import { Product } from '../Product';

interface ProductWrapperProps {
  product: ProductBlock;
}

export function ProductWrapper({ product }: Readonly<ProductWrapperProps>) {
  const className =
    product?.size === 'small'
      ? styleProductWrapper?.article6
      : styleProductWrapper?.article12;

  return (
    <article className={className}>
      <Product product={product} />
    </article>
  );
}
