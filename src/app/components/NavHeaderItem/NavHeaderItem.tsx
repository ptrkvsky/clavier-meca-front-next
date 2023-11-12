'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { styleNavHeaderItem } from './NavHeaderItem.css';
import useLegacyEffect from '@/app/hooks/useLegacyEffect/useLegacyEffect';

interface Props {
  slug: string;
  label: string;
}

interface Props {
  slug: string;
  label: string;
}

export function NavHeaderItem({ slug, label }: Readonly<Props>) {
  const refLink = useRef<HTMLAnchorElement>(null);

  useLegacyEffect(() => {
    const backgroundMenu: HTMLButtonElement | null =
      document.querySelector('#background-menu');
    const navHeader: HTMLElement | null = document.querySelector('#nav-header');

    refLink.current?.addEventListener('click', () => {
      backgroundMenu?.classList?.remove('background-open');
      navHeader?.classList?.remove('background-open');
    });

    return () => {
      refLink.current?.removeEventListener('click', () => {
        backgroundMenu?.classList?.remove('background-open');
        navHeader?.classList?.remove('background-open');
      });
    };
  }, []);

  return (
    <li className={styleNavHeaderItem.listItem}>
      <Link ref={refLink} href={`/categorie/${slug}`}>
        {label}
      </Link>
    </li>
  );
}
