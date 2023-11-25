import { PostSlices } from '@/app/(features)/article/[slug]/components/PostSlices';
import { styleTemplatePost } from './TemplatePost.css';
import { Intro } from '../Intro/Intro';

interface Props {
  slug: string;
}

export function TemplatePost({ slug }: Readonly<Props>) {
  return (
    <div className={styleTemplatePost?.mainWrapper}>
      <Intro slug={slug} />
      <PostSlices slug={slug} />
    </div>
  );
}
