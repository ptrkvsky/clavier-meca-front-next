import fetchSanity from '@/app/helpers/fetchSanity';
import { siteMapQuery } from './List.queries';
import {
  PlansiteAuhtor,
  PlansiteCategory,
  PlansitePost,
} from '@/app/(features)/plan-site/interfaces';
import PostItem from '../PostItem/PostItem';
import Link from 'next/link';

interface DataSitemap {
  authors: PlansiteAuhtor[];
  categories: PlansiteCategory[];
  posts: PlansitePost[];
}

export async function List() {
  const dataSitemap = await fetchSanity<DataSitemap>(siteMapQuery);

  console.log(dataSitemap?.authors);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {dataSitemap?.categories.map((category) => (
          <li key={category?._id}>
            <Link href={`/categorie/${category?.title}`}>
              {category?.title}
            </Link>
          </li>
        ))}
      </ul>

      <h2>Auteurs</h2>
      {dataSitemap?.authors.map((author) => (
        <li key={author?._id}>
          <Link href={`/auteur/${author?.slug?.current}`}>{author?.name}</Link>
        </li>
      ))}

      <h2>Articles</h2>
      <ul>
        {dataSitemap?.posts.map((post) => (
          <PostItem key={post?._id} post={post} />
        ))}
      </ul>
    </div>
  );
}
