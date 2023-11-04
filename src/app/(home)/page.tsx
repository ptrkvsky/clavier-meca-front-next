import { SectionComparatifs } from './components/SectionComparatifs/SectionComparatifs';
import { SectionHero } from './components/SectionHero/SectionHero';

export default function Home() {
  return (
    <main>
      <SectionHero />
      <SectionComparatifs />
    </main>
  );
}
