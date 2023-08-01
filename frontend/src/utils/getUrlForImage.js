import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~sanity.config';

const builder = imageUrlBuilder(sanityClient);

export default source => {
  return builder.image(source);
};
