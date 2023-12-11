import { PortableText } from '@portabletext/react';
import { title as styleTitle } from '@/app/styles/titles.css';
import { KeyboardsSection } from '@/app/gql/graphql';
import { Slice } from '@article/interfaces/Slice';
import { Hn } from '@/app/interfaces/Hn';
import { styleSliceKeyboardsComparaison as style } from './SliceKeyyboardsComparaison.css';
import { TableKeyboardItem } from '@article/components/TableKeyboardItem';

interface Props {
  slice: Slice;
}

export function SliceKeyyboardsComparaison({ slice }: Props) {
  const { keyboards, hn, title, descriptionRaw } = slice as KeyboardsSection;

  const Heading: Hn = (hn as Hn) ?? 'h2';

  const classHeading = styleTitle[Heading];

  return (
    <section className="slice-keyboard">
      <Heading className={`slice-keyboard__title ${classHeading}`}>
        {title}
      </Heading>
      <div className={style?.tableDesc}>
        <PortableText value={descriptionRaw} />
      </div>

      <div className={style?.wrapperTable}>
        <table className={style?.table}>
          <thead className={style?.thead}>
            <tr>
              <th className="pos">#</th>
              <th className="photo">photo</th>
              <th className="nom">nom</th>
              <th className="prix">prix</th>
              <th className="offre">offre</th>
            </tr>
          </thead>
          <tbody>
            {keyboards?.map((keyboard, index) =>
              keyboard?.keyboard ? (
                <TableKeyboardItem
                  key={keyboard?._key}
                  keyboard={keyboard}
                  position={index + 1}
                />
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
