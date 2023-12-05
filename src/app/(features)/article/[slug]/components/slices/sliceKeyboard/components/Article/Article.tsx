import Image from 'next/image';
import { KeyboardBlock } from '@/app/gql/graphql';
import { styleArticle } from '.';
import { stylesButton } from '@/app/styles/buttons.css';
import { getImageInfo } from '@/app/utils/getImageInfo';
import { title as styleTitle } from '@/app/styles/titles.css';
import { PortableText } from '@portabletext/react';
import { ProsAndCons } from '../ProsAndCons';

export interface Props {
  keyboardBlock: KeyboardBlock;
}

export function Article({ keyboardBlock }: Readonly<Props>) {
  const { keyboard } = keyboardBlock;
  if (!keyboard) return null;

  const urlProduct = keyboard?.urlAmazon ?? keyboard?.urlMateriel ?? '#';

  const { imageAlt, imageUrl } = getImageInfo(keyboard?.mainImage);

  return (
    <article className={styleArticle.article}>
      <div className={styleArticle.stickyHeading}>
        <div className="title-teaser">
          <h3 className={` ${styleArticle.keyboardTitle}`}>
            {keyboardBlock?.title}
          </h3>
          <span className="teaser">{keyboard.teaser}</span>
        </div>

        <div className="button-wrapper">
          <a target="_blank" className={stylesButton.primary} href={urlProduct}>
            Voir l&apos;offre
          </a>
        </div>
      </div>

      <div>
        <div className="wrapper-image-desc">
          <div className={styleArticle?.wrapperImage}>
            <div className={styleArticle?.nextImage}>
              <Image
                alt={imageAlt}
                src={imageUrl}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className={styleArticle?.wrapperDesc}>
            <h4 className={styleTitle?.h4}>Points clefs</h4>
            <dl>
              <dt>Gabarit :</dt>
              <dd>{keyboard.layout}</dd>

              <dt>Switches :</dt>
              <dd>
                {keyboard?.switchCategory?.map((switchCategory) => {
                  return (
                    <span
                      key={`${keyboardBlock?.title} ${switchCategory?.nom}}`}
                    >
                      {switchCategory?.nom}
                    </span>
                  );
                })}
              </dd>

              <dt>RGB :</dt>
              <dd>{keyboard.rgb ? 'Oui' : 'Non'}</dd>
            </dl>
          </div>
        </div>

        <div className="text-desc">
          <PortableText value={keyboard.shortDescRaw} />
        </div>

        <ProsAndCons pros={keyboard?.prosRaw} cons={keyboard?.consRaw} />

        <div className="button">
          <a className={stylesButton.primary} href={urlProduct}>
            Voir l&apos;offre
          </a>
        </div>
      </div>
    </article>
  );
}
