import { PortableText } from '@portabletext/react';
import { KeyboardsSection } from '@/app/gql/graphql';
import { Slice } from '../../interfaces/Slice';
import { title as styleTitle } from '@/app/styles/titles.css';
import { Hn } from '@/app/interfaces/Hn';
import { styleSliceKeyboard } from './SliceKeyboard.css';
import { Article } from '@/app/(features)/article/[slug]/components/sliceKeyboard/components/Article';
import { Aside } from './components/Aside';

interface Props {
  slice: Slice;
}

export function SliceKeyboard({ slice }: Readonly<Props>) {
  const {
    hn,
    descriptionRaw,
    keyboardCol,
    keyboards,
    subTitleCol,
    title,
    titleCol,
  } = slice as KeyboardsSection;

  const Heading: Hn = (hn as Hn) ?? 'h2';

  return (
    <section>
      <Heading className={styleTitle.h2}>{title}</Heading>

      <div className={styleSliceKeyboard.grid}>
        {/* COL LEFT */}
        <div className="col-left">
          <div className="intro">
            <PortableText value={descriptionRaw} />
          </div>

          {keyboards?.map((keyboard) => {
            return (
              keyboard && (
                <Article key={keyboard?._key} keyboardBlock={keyboard} />
              )
            );
          })}
        </div>
        {/* COL RIGHT */}
        <div className="col-right">
          {keyboardCol && (
            <Aside
              keyboard={keyboardCol}
              subTitleCol={subTitleCol}
              titleCol={titleCol}
            />
          )}
        </div>
      </div>
    </section>
  );
}
