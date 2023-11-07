import Link from 'next/link';
import { styleNavHeaderItem } from './NavHeaderItem.css';

interface Props {
  slug: string;
  label: string;
}

export function NavHeaderItem({ slug, label }: Readonly<Props>) {
  return (
    <li className={styleNavHeaderItem.listItem}>
      <Link href={`/categorie/${slug}`}>{label}</Link>
    </li>
  );
}
