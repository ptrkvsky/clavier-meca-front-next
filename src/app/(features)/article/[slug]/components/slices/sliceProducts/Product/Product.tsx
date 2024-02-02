import { ProductBlock } from '@/app/gql/graphql';
import { styleProduct } from './Product.css';
import { getImageInfo } from '@/app/utils/getImageInfo';
import Image from 'next/image';

interface Props {
  product: ProductBlock;
}

export function Product({ product }: Readonly<Props>) {
  const { imageAlt, imageHeight, imageUrl, imageWidth } = getImageInfo(
    product.product?.mainImage
  );

  return (
    <div className={styleProduct.blockIllu}>
      <a href={product.product?.url ?? '#'} target="_blank" rel="noreferrer">
        {imageUrl && (
          <Image
            alt={imageAlt}
            src={imageUrl}
            height={imageHeight}
            width={imageWidth}
          />
        )}
      </a>
    </div>
  );
}
