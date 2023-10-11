import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~sanity.config';

const builder = imageUrlBuilder(sanityClient);

const getUrl = source => {
  return builder.image(source).url();
};

const getDimensions = source => {
  console.log(source.asset._ref);
};

export { getUrl, getDimensions };
