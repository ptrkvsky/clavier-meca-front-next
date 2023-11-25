import { Keyboard, Maybe } from '@/app/gql/graphql';
import { styleAside as style } from './Aside.css';
import { getImageInfo } from '@/app/utils/getImageInfo';
import Image from 'next/image';
import { stylesButton } from '@/app/styles/buttons.css';

interface Props {
  keyboard: Keyboard;
  subTitleCol: Maybe<string> | undefined;
  titleCol: Maybe<string> | undefined;
}

export function Aside({ keyboard, subTitleCol, titleCol }: Readonly<Props>) {
  const { imageAlt, imageHeight, imageUrl, imageWidth } = getImageInfo(
    keyboard?.mainImage
  );

  const urlProduct = keyboard?.urlAmazon ?? keyboard?.urlMateriel ?? '#';

  return (
    <aside className={style.aside}>
      {imageUrl && (
        <Image
          alt={imageAlt}
          src={imageUrl}
          height={imageHeight}
          width={imageWidth}
        />
      )}
      {titleCol && <h2 className={style.title}>{titleCol}</h2>}
      <h3 className={style?.titleProduct}>{keyboard.title}</h3>
      <p className={style?.subTitle}>{subTitleCol}</p>
      <a className={stylesButton.primary} href={urlProduct}>
        Voir l&apos;offre
      </a>
    </aside>
  );
}
