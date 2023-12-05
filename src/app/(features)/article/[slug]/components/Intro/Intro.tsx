import fetchSanity from '@/app/helpers/fetchSanity';
import { queryIntro } from './Intro.query';
import { IntroDate } from '@/app/(features)/article/[slug]/components/IntroDate';
import { styleIntro as style } from './Intro.css';
interface PostIntro {
  title: string;
  _updatedAt: string;
  categories: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  }[];
}

interface DataIntro {
  posts: PostIntro[];
}

interface Props {
  slug: string;
}

export async function Intro({ slug }: Readonly<Props>) {
  const dataIntro = await fetchSanity<DataIntro>(queryIntro, {
    slug,
  });

  if (!dataIntro?.posts?.length) return null;

  const post = dataIntro?.posts[0];

  return (
    <div className={style.wrapperMain}>
      <span className={style.categorie}>{post.categories[0].title}</span>
      <h1 className={style.h1}>{post.title}</h1>
      <div className={style.wrapperDate}>
        <IntroDate date={post._updatedAt} />
      </div>
    </div>
  );
}
