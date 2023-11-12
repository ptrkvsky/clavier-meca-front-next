import { Post } from '@/app/gql/graphql';
import { SliceHero } from '../SliceHero';
import fetchSanity from '@/app/helpers/fetchSanity';
import { queryPostSlices } from './PostSlices.query';

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
        switch (slice?._type) {
          case 'hero':
            el = <SliceHero />;
            break;

          case 'switchBlock':
            el = <div>switch block</div>;
            break;

          case 'bodySection':
            el = <div>body section</div>;
            break;
        }
        return el;
      })}
    </div>
  );
}
