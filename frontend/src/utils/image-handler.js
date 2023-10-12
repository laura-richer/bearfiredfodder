import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~sanity.config';

const builder = imageUrlBuilder(sanityClient);

const getUrl = source => builder.image(source).url();

const getDimensions = source => {
  const {
    asset: { _ref: reference },
  } = source;

  const pattern = /^image-([\da-f]+)-(\d+x\d+)-(\w+)$/;
  const dimensions = pattern.exec(reference)[2];
  const [width, height] = dimensions.split('x').map(v => Number.parseInt(v, 10));

  return { width, height };
};

export { getUrl, getDimensions };
