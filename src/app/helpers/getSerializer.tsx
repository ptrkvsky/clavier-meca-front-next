import Link from 'next/link';
import fetchSanity from './fetchSanity';
import { urlFor } from '../utils/sanityClient';

const querySlugPost = `
  query($slug: ID!) {
    post: Post(id: $ref) {
      slug { 
        current
      }
    }
  }  
`;

interface PostSlug {
  post: {
    slug: {
      current: string;
    };
  };
}

interface InternalLink {
  children: any;
  value: {
    reference: {
      _ref: string;
    };
  };
}

export function getSerializer() {
  const serializers = {
    types: {
      mainImage: (data: any) => {
        const id = data?.value?.asset?._ref;
        const image = urlFor(id).auto('format').format('webp').url();

        // eslint-disable-next-line @next/next/no-img-element
        return <img className="img-serialized" src={image} alt="" />;
        //query sanity image from data ref
      },
    },
    marks: {
      internalLink: async ({ children, value }: InternalLink) => {
        try {
          const ref = value?.reference?._ref;

          const dataPost = await fetchSanity<PostSlug>(querySlugPost, {
            ref,
          });

          const href = dataPost?.post?.slug?.current ?? '#';

          return <Link href={href}>{children}</Link>;
        } catch (error) {
          console.error('🔥', error);
        }
      },
      link: (prop: any) => {
        return <a href={prop?.value?.href}>{prop.children}</a>;
      },
    },
  };
  return serializers;
}
