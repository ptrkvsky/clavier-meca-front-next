import Link from 'next/link';
import { styleHeader } from './Header.css';
import { NavHeader } from '../NavHeader';

export async function Header() {
  return (
    <header className={styleHeader.header}>
      <Link className={styleHeader.logo} href={'/'}>
        Clavier Meca
      </Link>
      <NavHeader />
    </header>
  );
}
