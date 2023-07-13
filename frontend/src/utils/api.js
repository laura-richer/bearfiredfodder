import { useSanityClient } from 'astro-sanity';
import { groq } from 'astro-sanity';

export async function getHomePageContent() {
  const query = groq`*[_type == "homePageContent" && _id == "0b3a877f-9ede-4360-a7b0-dee96107215e"][0]`;
  const homePageContent = await useSanityClient().fetch(query);
  return homePageContent;
}
