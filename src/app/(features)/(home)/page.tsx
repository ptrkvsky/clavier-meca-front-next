import { Metadata } from 'next';
import { SectionComparatifs } from './components/SectionComparatifs/SectionComparatifs';
import { SectionGuides } from './components/SectionGuides';
import { SectionHero } from './components/SectionHero';
import { createMetaDataHome, fetchMetaDataHome } from './functions/getMetaHome';
import { getJsonLdHome } from './functions/getJsonLdHome';
import { ScriptJsonLD } from '@/app/components/ScriptJsonLD/ScriptJsonLD';
import ClientComponent from './components/ClientComponent';

export async function generateMetadata(): Promise<Metadata | null> {
  const dataHome = await fetchMetaDataHome();
  const metaData = createMetaDataHome(dataHome);
  return metaData;
}

export default function Home() {
  const jsonLdHome = getJsonLdHome();

  console.log('hellooooooo');

  return (
    <>
      <ClientComponent />
      <ScriptJsonLD jsonLd={jsonLdHome} />
      <SectionHero />
      <SectionComparatifs />
      <SectionGuides />
    </>
  );
}
