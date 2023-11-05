import { SectionComparatifs } from './components/SectionComparatifs/SectionComparatifs';
import { SectionGuides } from './components/SectionGuides';
import { SectionHero } from './components/SectionHero/SectionHero';

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionComparatifs />
      <SectionGuides />
    </>
  );
}
