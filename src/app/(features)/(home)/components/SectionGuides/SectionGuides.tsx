import fetchSanity from '@/app/helpers/fetchSanity';
import { postsQueryHomeComparatifs } from './SectionGuides.queries';
import { Home } from '@/app/gql/graphql';
import { styleSectionGuides } from './SectionGuides.css';
import { PostsList } from '@/app/components/PostsList/PostsList';

interface Guides {
  allHome: Array<Home>;
}

export async function SectionGuides() {
  const dataGuides = await fetchSanity<Guides>(postsQueryHomeComparatifs);
  const postsGuides = dataGuides?.allHome[1]?.postGuides;

  console.log(postsGuides);

  return postsGuides?.length ? (
    <section className={styleSectionGuides?.section}>
      <h2 className={styleSectionGuides?.title}>Comparatifs claviers</h2>

      <div>
        {postsGuides && postsGuides.length > 0 && (
          <PostsList posts={postsGuides} />
        )}
      </div>
    </section>
  ) : null;
}
