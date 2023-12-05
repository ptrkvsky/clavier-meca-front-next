import { ProductBlock } from '@/app/gql/graphql';
import React from 'react';

interface ProductWrapperProps {
  product: ProductBlock;
}

export function ProductWrapper({ product }: Readonly<ProductWrapperProps>) {
  return (
    <div>
      <h1>ProductWrapper</h1>
    </div>
  );
}
