<script>
import { onMount } from 'svelte';
import { getHomePageContent, getHeaderNavItems } from '../utils/api';

import Header from '../components/Header.svelte';

import Hero from '../sections/Hero.svelte';
import About from '../sections/About.svelte';
import Menu from '../sections/Menu.svelte';
import Gallery from '../sections/Gallery.svelte';
import Contact from '../sections/Contact.svelte';

let headerNavItems = [];
let homeContent = [];
let formattedHeaderNavItems = [];
let formattedHomeContent = {};


// TODO find computed alternative to this
const formatHeaderNavItems = headerNavItems => {
  return headerNavItems.map(item => item.name);
}

// TODO find computed alternative to this
const formatHomeContent = homeContent => {
  return homeContent;
}

onMount(async () => {
  headerNavItems = await getHeaderNavItems();
  formattedHeaderNavItems = formatHeaderNavItems(headerNavItems);

  homeContent = await getHomePageContent();
  formattedHomeContent = formatHomeContent(homeContent[0]);
  console.log(formattedHomeContent)
});

</script>

{#if formattedHeaderNavItems?.length > 0}
  <Header headerNavItems={formattedHeaderNavItems} />
{/if}

{#if homeContent?.length > 0}
  <Hero />
  <About />
  <Menu />
  <Gallery />
  <Contact />
{/if}

<style lang="scss">
  // Global styles here because theres only one page
</style>
