import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '~sanity.config';

export async function getHomePageContent() {
  const query = `*[_type == "homePageContent"]`;
  return await sanityClient.fetch(query);
}

export async function getHeaderNavItems() {
  const query = `*[_type == "headerNavigation"]`;
  return await sanityClient.fetch(query);
}

export async function getMenuItems() {
  const query = `*[_type == "menuItem"]{
    title,
    "ingredients": ingredient[]->name,
    "dietaryRequirements": dietaryRequirement[]->name
  }`;
  return await sanityClient.fetch(query);
}
