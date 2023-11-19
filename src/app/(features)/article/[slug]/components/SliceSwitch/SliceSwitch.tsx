import { Slice } from '@/app/(features)/article/[slug]/interfaces/Slice';
import { styleSliceSwitch as style } from './SliceSwitch.css';
import { SwitchBlock } from '@/app/gql/graphql';
import Image from 'next/image';
import { getImageInfo } from '@/app/utils/getImageInfo';
import { PlayerAudio } from '@/app/components/PlayerAudio/PlayerAudio';
import { SwitchDetails } from '../SwitchDetails/SwitchDetails';
import { Hn } from '@/app/interfaces/Hn';

interface Props {
  slice: Slice;
}

/**
 * @description
 * This function is used to render a slice of type hero.
 *
 * @param {Slice} slice - The slice of type switch
 * @returns {JSX.Element} - The JSX element of the switch slice
 */
export function SliceSwitch({ slice }: Readonly<Props>): JSX.Element {
  const { Hn, switch: switchItem } = slice as SwitchBlock;

  const Heading = (Hn as Hn) ?? 'h2';

  const { imageAlt, imageHeight, imageUrl, imageWidth } = getImageInfo(
    switchItem?.mainImage
  );

  const grosSon = switchItem?.son?.asset?.url;

  return (
    <section className={style?.section}>
      {switchItem?.nom && (
        <Heading className={style.title}>{switchItem.nom}</Heading>
      )}
      <div className={style?.grid}>
        <div className={style?.illustration}>
          <Image
            alt={imageAlt}
            src={imageUrl}
            width={imageWidth}
            height={imageHeight}
          />
        </div>

        <div className="switch-desc-wrapper">
          <div className="switch-desc">
            {switchItem && <SwitchDetails switchItem={switchItem} />}
            {grosSon && <PlayerAudio grosSon={grosSon} />}
          </div>
        </div>
      </div>
    </section>
  );
}
