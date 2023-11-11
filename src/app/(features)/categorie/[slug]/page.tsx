import { PostsList } from '@/app/components/PostsList/PostsList';
import { title } from '@/app/styles/titles.css';
import { queryAllPost } from './page.queries';
import fetchSanity from '@/app/helpers/fetchSanity';
import { Post } from '@/app/gql/graphql';

interface Props {
  params: {
    slug: string;
  };
}

interface DataPosts {
  posts: Post[];
}

interface Props {
  params: {
    slug: string;
  };
}

interface DataPosts {
  posts: Post[];
}

export default async function Page({ params }: Readonly<Props>) {
  const dataPosts = await fetchSanity<DataPosts>(queryAllPost);
  if (!dataPosts) {
    return null;
  }
  const posts = dataPosts.posts;
  // filter posts by slug category
  const postsByCategory = posts.filter((post) => {
    return post.categories?.some((category) => {
      return category?.slug?.current === params.slug;
    });
  });

  return (
    <div>
      <h1 className={title.main}>Page</h1>

      {Boolean(postsByCategory?.length) && (
        <PostsList posts={postsByCategory} />
      )}
    </div>
  );
}
