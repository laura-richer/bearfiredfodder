import { createSanityClient, groq } from 'astro-sanity';

export async function getHomePageContent() {
  const query = groq`*[_type == "homePageContent"`;
  const homePageContent = await createSanityClient().fetch(query);
  return homePageContent;
}
