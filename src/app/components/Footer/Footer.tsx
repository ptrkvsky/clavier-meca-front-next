import fetchSanity from '@/app/helpers/fetchSanity';
import { queryFooter } from './Footer.queries';
import Link from 'next/link';
import { styleFooter } from './Footer.css';

interface DataFooter {
  allPost: {
    _id: '0bc36312-b5bd-4a1b-b7f7-4371eb4ad9b3';
    title: 'Mentions légales du site clavier-meca';
    slug: {
      current: string;
    };
  }[];
}

export async function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const pathName = '/';

  const footerData = await fetchSanity<DataFooter>(queryFooter);
  if (!footerData) return;

  const mentionsLegalesSlug = `/${footerData?.allPost[0]?.slug?.current}`;

  return (
    <footer className={styleFooter.footer}>
      <div className={styleFooter.footerTop}>
        <p>CLAVIER MECA / {year}</p>

        <div className={styleFooter.disclaimer}>
          <h2>Information et protection du consommateur</h2>
          <p>
            Notre site est rédigé par des passionnés et des professionnels du
            matériel informatique. Certains liens sont liés à des programmes
            d’affiliation (Amazon, Materiel.net). Chaque clic sur un produit est
            susceptible de vous renvoyer vers l’un de ces commerçants. Si vous
            décidez de commander un produit, nous recevons une commission via
            nos liens. Cela nous fera plaisir et nous aidera à poursuivre nos
            efforts pour vous donner une information toujours plus riche sur les
            meilleurs produits. Cela ne vous coûte rien de plus que votre achat
            comme vous le faites habituellement.
          </p>
          <p>
            En tant que Partenaire Amazon, je réalise un bénéfice sur les achats
            remplissant les conditions requises.
          </p>
        </div>

        <div className="menu">
          {pathName === '/' ? (
            <Link href="/plan-site">Plan du site</Link>
          ) : (
            <Link href="/plan-site" content="Plan du site" />
          )}
          <br />
          <Link href={mentionsLegalesSlug}>Mentions légales</Link>
          <br />
          <Link href={'/contact'}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}
