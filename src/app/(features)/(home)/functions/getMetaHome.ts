import { Home } from '@/app/gql/graphql';
import fetchSanity from '@/app/helpers/fetchSanity';
import { queryHomeMETA } from '../page.queries';
import { Metadata } from 'next';
import { baseConfig } from '@/app/config/baseConfig';
import { createMetaDataObject } from '@/app/utils/createMetaDataObject';

interface DataHome {
  allHome: Array<Home>;
}

export async function fetchMetaDataHome(): Promise<DataHome | null> {
  const dataHome = await fetchSanity<DataHome>(queryHomeMETA);
  if (!dataHome || dataHome?.allHome.length === 0) return null;
  return dataHome;
}

function getMetaHome(dataHome: DataHome) {
  const metaTitle = dataHome.allHome[1]?.metaTitle ?? '';
  const metaDescription = dataHome.allHome[1]?.metaDescription ?? '';
  const metaImage = dataHome.allHome[1]?.mainImage?.asset?.url ?? '';
  const metadataBase = new URL(baseConfig.url ?? 'https://www.clavier-meca.fr');
  const canonical = '';

  return {
    metaTitle,
    metaDescription,
    metaImage,
    metadataBase,
    canonical,
  };
}

export function createMetaDataHome(dataHome: DataHome | null): Metadata | null {
  if (!dataHome) return null;

  const { metadataBase, metaTitle, metaDescription, canonical, metaImage } =
    getMetaHome(dataHome);

  const metaData: Metadata = createMetaDataObject({
    canonical,
    metadataBase,
    metaDescription,
    metaImage,
    metaTitle,
  });
  return metaData;
}
