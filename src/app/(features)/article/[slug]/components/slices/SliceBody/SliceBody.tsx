import { BodySection } from '@/app/gql/graphql';
import { PortableText } from '@portabletext/react';
import { styleSliceBody as style } from './SliceBody.css';
import { getSerializer } from '@/app/helpers/getSerializer';
import { Slice } from '@article/interfaces/Slice';

interface Props {
  slice: Slice;
}

export const SliceBody = ({ slice }: Readonly<Props>) => {
  const { bodyTexttRaw } = slice as BodySection;

  const serializers = getSerializer();
  return (
    <section className={style?.sectionBody}>
      {/* @ts-ignore */}
      <PortableText value={bodyTexttRaw} components={serializers} />
    </section>
  );
};
