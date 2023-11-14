import { Post } from '@/app/gql/graphql';
import { SliceHero } from '../SliceHero';
import fetchSanity from '@/app/helpers/fetchSanity';
import { queryPostSlices } from './PostSlices.query';
import { SliceBody } from '../SliceBody';

interface DataSlices {
  allPost: Post[];
}

export async function PostSlices() {
  const data = await fetchSanity<DataSlices>(queryPostSlices, {
    slug: 'comment-faire-clavier-custom',
  });
  if (!data) return null;

  const activeSlices = data?.allPost[0]?.content?.filter((c) => !c?.disabled);

  return (
    <div>
      {activeSlices?.map((slice) => {
        let el = null;
        console.log(slice?._type);
        switch (slice?._type) {
          case 'hero':
            el = <SliceHero key={slice?._key} slice={slice} />;
            break;

          case 'switchBlock':
            el = <div>switch block</div>;
            break;

          case 'bodySection':
            el = <SliceBody slice={slice} />;
            break;
        }
        return el;
      })}
    </div>
  );
}
