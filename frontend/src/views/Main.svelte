<script>
import { onMount } from 'svelte';
import { getHomePageContent } from '../utils/api';

import Header from '../components/Header.svelte';

import Hero from '../sections/Hero.svelte';
import About from '../sections/About.svelte';
import Menu from '../sections/Menu.svelte';
import Gallery from '../sections/Gallery.svelte';
import Contact from '../sections/Contact.svelte';

let homeContent = [];

onMount(async () => {
  homeContent = await getHomePageContent();
});

</script>

<Header />
<Hero />
<About />
<Menu />
<Gallery />
<Contact />
<p>{ homeContent }</p>

<style lang="scss">
  // Global styles here because theres only one page
</style>
