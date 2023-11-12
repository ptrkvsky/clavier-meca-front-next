import './NavHeader.css.css';
import { styleNavHeader } from './NavHeader.css';
import { ButtonMenu } from '../ButtonMenu/ButtonMenu';
import { NavHeaderList } from '../NavHeaderList/NavHeaderList';

export async function NavHeader() {
  return (
    <nav id="nav-header" className={`desktop ${styleNavHeader.nav}`}>
      <div className={styleNavHeader.wrapper}>
        <NavHeaderList />
        <div
          id="background-menu"
          className={`background ${styleNavHeader?.background}`}
        />

        <ButtonMenu />
      </div>
    </nav>
  );
}
