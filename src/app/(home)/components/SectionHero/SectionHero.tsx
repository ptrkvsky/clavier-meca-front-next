import fetchSanity from '@/app/helpers/fetchSanity';
import { queryHomeHero } from './SectionHero.queries';
import { PortableText } from '@portabletext/react';
import { Home } from '@/app/gql/graphql';
import { styleHero } from './SectionHero.css';
import Image from 'next/image';
import { getImageInfo } from '@/app/utils/getImageInfo';

interface DataHero {
  allHome: Array<Home>;
}

export async function SectionHero() {
  const dataHero = await fetchSanity<DataHero>(queryHomeHero);
  const intro = dataHero?.allHome[1]?.introRaw;
  const mainImage = dataHero?.allHome[1]?.mainImage;
  const title = dataHero?.allHome[1]?.h1;
  const { imageUrl, imageWidth, imageHeight, imageAlt } =
    getImageInfo(mainImage);

  return (
    <div className={styleHero.grid}>
      <div className={styleHero.colLeft}>
        <div>
          <div className={styleHero.containerTitle}>
            <h1 className={styleHero.title}>{title}</h1>
          </div>
          <div className={styleHero.intro}>
            <PortableText value={intro} />
          </div>
        </div>
      </div>
      <div className={styleHero.colRight}>
        <Image
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          fetchPriority="high"
        />
      </div>
    </div>
    // <Grid>
    //   <ColLeft>
    //     <div>
    //       <div className="container-title">
    //         <Title>{h1}</Title>
    //       </div>
    //       <Intro>
    //         <PortableText blocks={intro} />
    //       </Intro>
    //     </div>
    //   </ColLeft>
    //   <ColRight>
    //     <GatsbyImage image={image} alt={alt} />
    //   </ColRight>
    // </Grid>
  );
}
