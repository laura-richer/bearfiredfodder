import sanityClient from "@sanity/client";

export default sanityClient({
   projectId: "6f642s5x",
   dataset: "production",
   useCdn: true,
});
