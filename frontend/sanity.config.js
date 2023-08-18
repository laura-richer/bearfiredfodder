import sanityClient from '@sanity/client';

// TODO tokenise API
export default sanityClient({
  projectId: import.meta.env.PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  token: import.meta.env.API_TOKEN,
});
