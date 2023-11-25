import { KeyboardBlock } from '@/app/gql/graphql';
import { stylesButton } from '@/app/styles/buttons.css';
import { getImageInfo } from '@/app/utils/getImageInfo';
import Image from 'next/image';

interface Props {
  keyboard: KeyboardBlock;
  position: number;
}

export function TableKeyboardItem({ keyboard, position }: Readonly<Props>) {
  const keyboardItem = keyboard?.keyboard;

  if (!keyboardItem) return null;
  const mainImage = keyboardItem.mainImage;

  const { imageAlt, imageUrl } = getImageInfo(mainImage);

  const urlProduct =
    keyboard.keyboard?.urlAmazon ?? keyboard.keyboard?.urlMateriel ?? '';

  return (
    <tr>
      <td className="cell pos">
        <span className="marker">#</span>
        {position}
      </td>
      <td className="cell photo">
        {mainImage && (
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={220}
            height={150}
            loading="lazy"
          />
        )}
      </td>
      <td className="cell name">{keyboard.title}</td>
      <td className="cell price">
        {keyboardItem?.price}
        <span className="currency">€</span>
      </td>
      <td className="cell offer">
        <a className={stylesButton.primary} href={urlProduct}>
          Voir l&apos;offre
        </a>
      </td>
    </tr>
  );
}
