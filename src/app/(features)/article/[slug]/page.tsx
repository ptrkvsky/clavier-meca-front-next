import { TemplatePost } from './components/TemplatePost';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Readonly<PageProps>) {
  const { slug } = params;
  return <TemplatePost slug={slug} />;
}
