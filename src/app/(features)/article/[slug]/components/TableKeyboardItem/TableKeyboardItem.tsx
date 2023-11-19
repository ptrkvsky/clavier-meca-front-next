import { KeyboardBlock } from '@/app/gql/graphql';
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

  const { imageAlt, imageHeight, imageUrl, imageWidth } =
    getImageInfo(mainImage);

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
            height={imageHeight}
            width={imageWidth}
          />
        )}
      </td>
      <td className="cell name">{keyboard.title}</td>
      <td className="cell price">
        {keyboardItem?.price}
        <span className="currency">€</span>
      </td>
      <td className="cell offer">
        {/* <CloakButton
          url={keyboard.urlAmazon || keyboard.urlMateriel}
          content="Voir l'offre"
        /> */}
      </td>
    </tr>
  );
}
