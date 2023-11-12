'use server';

import fetchSanity from '@/app/helpers/fetchSanity';
import { Menu } from '@/app/gql/graphql';
import { NavHeaderItem } from '@/app/components/NavHeaderItem';
import { styleNavHeaderList } from './NavHeader.css';
import { queryNavHeaderList } from './NavHeaderList.queries';

interface DataNavHeader {
  allMenu: Menu[];
}

export async function NavHeaderList() {
  const navHeaderData = await fetchSanity<DataNavHeader>(queryNavHeaderList);
  if (!navHeaderData) return;

  const menuItems = navHeaderData?.allMenu[0].menuItem;
  if (menuItems?.length === 0) return;

  return (
    <ul className={styleNavHeaderList?.ul}>
      {menuItems?.map((menuItem) => {
        const key = menuItem?._key;
        const label = menuItem?.menuItemName;
        const slug = menuItem?.menuItemSlug?.current;
        if (!label || !slug) return;

        return <NavHeaderItem key={key} label={label} slug={slug} />;
      })}
    </ul>
  );
}
