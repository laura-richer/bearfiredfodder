import sanityClient from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

// TODO tokenise API
export default sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  token: process.env.API_TOKEN,
});
