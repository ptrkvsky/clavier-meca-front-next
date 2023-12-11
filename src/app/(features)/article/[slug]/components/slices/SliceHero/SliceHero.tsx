import Image from 'next/image';
import { Slice } from '@article/interfaces/Slice';
import { Hero } from '@/app/gql/graphql';
import { styleSliceHero as style } from './SliceHero.css';
import { PortableText } from '@portabletext/react';

interface Props {
  slice: Slice;
}

export function SliceHero({ slice }: Readonly<Props>) {
  const { illustration, padding: hasPadding, brefRaw } = slice as Hero;
  const alt = illustration?.image?.alt ?? '';
  const src = illustration?.image?.asset?.url ?? '';

  const classIllustration = hasPadding
    ? `${style?.illustration} has-padding`
    : style?.illustration;

  return (
    <div className={style?.grid}>
      <div className={classIllustration}>
        <Image alt={alt} src={src} width={575} height={575} />
      </div>
      <div className={style?.hightLightWrapper}>
        <div className={style?.highLight}>
          <PortableText value={brefRaw} />
        </div>
      </div>
    </div>
  );
}
