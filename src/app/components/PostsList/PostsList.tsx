import { Post } from '@/app/gql/graphql';
import { stylePostsList } from './PostsList.css';
import { PostsItem } from '@/app/components/PostsItem';
import { Maybe } from 'graphql/jsutils/Maybe';

interface Props {
  posts: Maybe<Post>[];
}

export function PostsList({ posts }: Readonly<Props>) {
  return (
    <div className={stylePostsList.wrapper}>
      {posts.map((post) => post && <PostsItem key={post._id} post={post} />)}
    </div>
  );
}
