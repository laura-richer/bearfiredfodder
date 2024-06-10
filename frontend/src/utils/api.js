import sanityClient from '~sanity.config';

export const getHomePageContent = async () => {
  const query = `*[_type == "homePageContent"]`;
  return sanityClient.fetch(query);
};

export const getHeaderNavItems = async () => {
  const query = `*[_type == "headerNavigation"]`;
  return sanityClient.fetch(query);
};

export const getMenuItems = async () => {
  const query = `*[_type == "menuItem"]{
    title,
    "ingredients": ingredient[]->name,
    "dietaryRequirements": dietaryRequirement[]->name
  }`;
  return sanityClient.fetch(query);
};
