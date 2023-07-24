import sanityClient from "../../sanity.config"
import imageUrlBuilder from "@sanity/image-url"

export async function getHomePageContent() {
  const query = `*[_type == "homePageContent"]`;
  const homePageContent = await sanityClient.fetch(query);
  return homePageContent;
}
