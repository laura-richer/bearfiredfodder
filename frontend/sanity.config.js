import sanityClient from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

export default sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  token: process.env.API_TOKEN,
});
