import { PortableText } from '@portabletext/react';
import { Highlight } from '@/app/gql/graphql';
import { styleSliceHighlight as style } from './SliceHighlight.css';
import { Slice } from '@article/interfaces/Slice';

interface Props {
  slice: Slice;
}

export function SliceHighlight({ slice }: Readonly<Props>) {
  if (slice?._type !== 'highlight') return null;
  const { contentRaw } = slice as Highlight;

  return (
    <section className={style?.section}>
      <div className={style.wrapper}>
        <div className={style?.content}>
          <PortableText value={contentRaw} />
        </div>
      </div>
    </section>
  );
}
