'use client';

import { useState } from 'react';
import { Post } from '@/app/gql/graphql';
import { getImageInfo } from '@/app/utils/getImageInfo';
import Image from 'next/image';
import Link from 'next/link';
import { stylePostsItem } from './PostsItem.css';

interface Props {
  post: Post;
}

export function PostsItem({ post }: Readonly<Props>) {
  const [hoverState, setHoverState] = useState(false);

  const handleEnter = () => {
    setHoverState(true);
  };

  const handleLeave = () => {
    setHoverState(false);
  };

  const { imageAlt, imageHeight, imageUrl, imageWidth } = getImageInfo(
    post.mainImage
  );

  const slug = post?.slug?.current ?? '#';
  const classHover = hoverState ? 'hover' : '';

  return (
    <>
      <Link
        className={`${classHover} ${stylePostsItem.wrapperTitle}`}
        href={`/${slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <h3 className={stylePostsItem.title}>{post.title}</h3>
      </Link>

      <Link
        className={`${classHover} ${stylePostsItem.wrapperImage}`}
        href={`/${slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <Image
          alt={imageAlt}
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          className={stylePostsItem.illu}
        />
      </Link>
    </>
  );
}
