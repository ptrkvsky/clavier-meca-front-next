export function getImageInfo(mainImage: any) {
  const imageUrl = mainImage?.asset?.url ?? '';
  const imageWidth = mainImage?.asset?.metadata?.dimensions?.width ?? 0;
  const imageHeight = mainImage?.asset?.metadata?.dimensions?.height ?? 0;
  const imageAlt = mainImage?.alt ?? '';

  return {
    imageUrl,
    imageWidth,
    imageHeight,
    imageAlt,
  };
}
