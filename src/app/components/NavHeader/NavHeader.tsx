import fetchSanity from '@/app/helpers/fetchSanity';
import { queryNavHeader } from './NavHeader.queries';
import { styleNavHeader } from './NavHeader.css';
import { Menu } from '@/app/gql/graphql';
import { NavHeaderItem } from '../NavHeaderItem/NavHeaderItem';

interface DataNavHeader {
  allMenu: Menu[];
}

export async function NavHeader() {
  const navHeaderData = await fetchSanity<DataNavHeader>(queryNavHeader);
  if (!navHeaderData) return;

  const menuItems = navHeaderData?.allMenu[0].menuItem;
  if (menuItems?.length === 0) return;

  return (
    <nav className={`desktop ${styleNavHeader.nav}`}>
      <div className={styleNavHeader.wrapper}>
        <ul className={styleNavHeader?.ul}>
          {menuItems?.map((menuItem) => {
            const key = menuItem?._key;
            const label = menuItem?.menuItemName;
            const slug = menuItem?.menuItemSlug?.current;
            if (!label || !slug) return;

            return <NavHeaderItem key={key} label={label} slug={slug} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
