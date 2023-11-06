import { Metadata } from 'next';

interface MetaDataProps {
  metadataBase: URL;
  metaTitle: string;
  metaDescription: string;
  metaImage: string;
  canonical: string;
}

export function createMetaDataObject({
  metadataBase,
  metaTitle,
  metaDescription,
  metaImage,
  canonical,
}: MetaDataProps): Metadata {
  return {
    metadataBase,
    title: metaTitle,
    description: metaDescription,
    generator: 'Next.js',
    alternates: {
      canonical,
    },
    openGraph: {
      images: [metaImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}
