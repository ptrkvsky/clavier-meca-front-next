import { BodySection } from '@/app/gql/graphql';
import { Slice } from '../../interfaces/Slice';
import { PortableText } from '@portabletext/react';
import { styleSliceBody as style } from './SliceBody.css';
import { getSerializer } from '@/app/helpers/getSerializer';

interface Props {
  slice: Slice;
}

export const SliceBody = ({ slice }: Readonly<Props>) => {
  const { bodyTexttRaw } = slice as BodySection;

  const serializers = getSerializer();
  return (
    <section className={style?.sectionBody}>
      <PortableText value={bodyTexttRaw} components={serializers} />
    </section>
  );
};
