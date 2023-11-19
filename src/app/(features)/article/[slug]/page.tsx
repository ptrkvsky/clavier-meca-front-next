import { PostSlices } from './components/PostSlices/PostSlices';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { slug } = params;
  return (
    <div>
      <h1>Page</h1>
      <PostSlices slug={slug} />
    </div>
  );
}
