import { Post } from '@/app/gql/graphql';
import { SliceHero } from '@article/components/slices/SliceHero';
import fetchSanity from '@/app/helpers/fetchSanity';
import { queryPostSlices } from './PostSlices.query';
import { SliceBody } from '@article/components/slices/SliceBody';
import { SliceSwitch } from '@article/components/slices/SliceSwitch';
import { SliceHighlight } from '@article/components/slices/SliceHighlight';
import { SliceKeyyboardsComparaison } from '@article/components/slices/SliceKeyyboardsComparaison';
import { SliceKeyboard } from '@article/components/slices/sliceKeyboard';
import { SliceProducts } from '@article/components/slices/sliceProducts/SliceProducts';

interface DataSlices {
  allPost: Post[];
}

interface PropsPostSlices {
  slug: string;
}

/**
 * @description
 * This function is used to render slices of a post.
 *
 * @param {string} slug - The slug of the post
 * @returns {JSX.Element | null} - The JSX element of the slices
 */
export async function PostSlices({ slug }: Readonly<PropsPostSlices>) {
  const data = await fetchSanity<DataSlices>(queryPostSlices, {
    slug,
  });

  if (!data) return null;

  const activeSlices = data?.allPost[0]?.content?.filter((c) => !c?.disabled);

  return (
    <div>
      {activeSlices?.map((slice) => {
        let el = null;

        switch (slice?._type) {
          case 'hero':
            el = <SliceHero key={slice?._key} slice={slice} />;
            break;

          case 'highlight':
            el = <SliceHighlight key={slice._key} slice={slice} />;
            break;

          case 'keyboardsSection':
            el = <SliceKeyboard key={slice._key} slice={slice} />;
            break;

          case 'keyboardsTable':
            el = <SliceKeyyboardsComparaison key={slice._key} slice={slice} />;
            break;

          case 'switchBlock':
            el = <SliceSwitch key={slice?._key} slice={slice} />;
            break;

          case 'bodySection':
            el = <SliceBody key={slice?._key} slice={slice} />;
            break;

          case 'productsSection':
            el = <SliceProducts key={slice._key} slice={slice} />;
            break;

          default:
            el = null;
        }

        return el;
      })}
    </div>
  );
}
