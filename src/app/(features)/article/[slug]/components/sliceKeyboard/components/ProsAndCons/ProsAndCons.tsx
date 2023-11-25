import { PortableText } from '@portabletext/react';
import { styleSectionProsAndCons as style } from './ProsAndCons.css';

interface Props {
  pros: any;
  cons: any;
}

export function ProsAndCons({ pros, cons }: Readonly<Props>) {
  return (
    <section className={style?.section}>
      <div className="pros">
        <p className={style?.title}>Nous avons aimé</p>
        <PortableText value={pros} />
      </div>
      <div className="cons">
        <p className={style?.title}>Nous avons moins aimé</p>
        <PortableText value={cons} />
      </div>
    </section>
  );
}
