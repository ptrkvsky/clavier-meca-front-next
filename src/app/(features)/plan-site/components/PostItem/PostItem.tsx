import Link from 'next/link';
import { PlansitePost } from '../../interfaces';

interface Props {
  post: PlansitePost;
}

export default function PostItem({ post }: Props) {
  if (!post?.isOnSitemap) return;

  return (
    <li>
      <Link href={`/post/${post.slug?.current}`}>{post?.title}</Link>
    </li>
  );
}
