'use client';

import { Post } from '@/app/gql/graphql';
import { getImageInfo } from '@/app/utils/getImageInfo';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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

  return (
    <>
      <Link
        className="wrapper-title"
        href={`/${slug}`}
        // hover={hoverState}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <h3>{post.title}</h3>
      </Link>

      <Link
        className="wrapper-image"
        href={`/${slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        // hover={hoverState}
      >
        <Image
          alt={imageAlt}
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
        />
      </Link>
    </>
  );
}
