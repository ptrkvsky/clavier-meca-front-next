import fetchSanity from '@/app/helpers/fetchSanity';
import { queryIntro } from './Intro.query';
import { IntroDate } from '@/app/(features)/article/[slug]/components/IntroDate';
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

export async function Intro({ slug }: Props) {
  const dataIntro = await fetchSanity<DataIntro>(queryIntro, {
    slug,
  });

  if (!dataIntro?.posts?.length) return null;

  const post = dataIntro?.posts[0];

  const date = new Date('2023-04-20T07:00:24Z');
  const formattedDate = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  console.log(formattedDate);

  return (
    <div>
      <span className="info categorie">{post.categories[0].title}</span>
      <h1>{post.title}</h1>
      <div className="date-wrapper">
        <span className="info date"></span>
        <IntroDate date={post._updatedAt} />
      </div>
    </div>
  );
}
