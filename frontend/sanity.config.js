import sanityClient from '@sanity/client';

// TODO tokenise API
export default sanityClient({
  projectId: '6f642s5x',
  dataset: 'production',
  useCdn: true,
});
