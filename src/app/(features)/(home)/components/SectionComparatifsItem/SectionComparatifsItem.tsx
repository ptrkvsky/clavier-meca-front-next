import { Post } from '@/app/gql/graphql';
import Link from 'next/link';
import Image from 'next/image';
import {
  styleLinkItem,
  styleGrid,
  styleWrapperImage,
  styleColLeft,
  styleTitle,
} from './SectionComparatifsItem.css';

interface Props {
  post: Post;
  isRevert: boolean;
}

export function SectionComparatifsItem({ post, isRevert }: Readonly<Props>) {
  const imageUrl = post?.mainImage?.asset?.url;
  const imageWidth = post?.mainImage?.asset?.metadata?.dimensions?.width ?? 0;
  const imageHeight = post?.mainImage?.asset?.metadata?.dimensions?.height ?? 0;
  const imageAlt = post?.mainImage?.alt ?? '';
  const classRevert = isRevert ? 'revert' : '';

  return (
    <Link className={styleLinkItem} href={`/${post?.slug?.current}`}>
      <article className={`${styleGrid} ${classRevert}`}>
        {imageUrl ? (
          <div>
            <div className={styleWrapperImage}>
              <Image
                src={imageUrl}
                width={imageWidth}
                height={imageHeight}
                alt={imageAlt}
                loading="lazy"
              />
            </div>
          </div>
        ) : null}
        <div className={styleColLeft}>
          <h3 className={`${styleTitle}`}>{post.title}</h3>
        </div>
      </article>
      {/* <Grid className={`${isRevert ? 'revert' : ''}`}>
        <div>
          <ImageContainer>
            <GatsbyImage image={image} alt={alt} />
          </ImageContainer>
        </div>
        <ColLeft>
          <Title>{post.title}</Title>
        </ColLeft>
      </Grid> */}
    </Link>
  );
}
