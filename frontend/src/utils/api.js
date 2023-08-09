import sanityClient from '~sanity.config';

export async function getHomePageContent() {
  const query = `*[_type == "homePageContent"]`;
  return sanityClient.fetch(query);
}

export async function getHeaderNavItems() {
  const query = `*[_type == "headerNavigation"]`;
  return sanityClient.fetch(query);
}

export async function getMenuItems() {
  const query = `*[_type == "menuItem"]{
    title,
    "ingredients": ingredient->name,
    "dietaryRequirements": dietaryRequirement[]->name
  }`;
  return sanityClient.fetch(query);
}
