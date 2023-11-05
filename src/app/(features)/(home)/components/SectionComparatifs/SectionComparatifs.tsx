import fetchSanity from '@/app/helpers/fetchSanity';
import { postsQueryHomeComparatifs } from './SectionComparatifs.queries';
import { Home } from '@/app/gql/graphql';
import { styleTitleSection } from './SectionComparatifs.css';
import styles from './SectionComparatifs.module.css';
import { SectionComparatifsItem } from '../SectionComparatifsItem';

interface Comparatifs {
  allHome: Array<Home>;
}

export async function SectionComparatifs() {
  const comparatifs = await fetchSanity<Comparatifs>(postsQueryHomeComparatifs);
  const postsComparatifs = comparatifs?.allHome[1]?.postComparatifs;

  return postsComparatifs?.length ? (
    <section>
      <h2 className={styleTitleSection}>Comparatifs claviers</h2>

      <section className={styles.section}>
        {postsComparatifs.map((post, index) => {
          const isRevert = !!(index & 1);

          return (
            post && (
              <SectionComparatifsItem
                key={post._id}
                post={post}
                isRevert={isRevert}
              />
            )
          );
        })}
      </section>
    </section>
  ) : null;
}
