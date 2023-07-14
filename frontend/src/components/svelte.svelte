<script>
import { onMount } from 'svelte';
// import { urlForImage } from '../utils/urlForImage';
import { getHomePageContent } from '../utils/api';

let homeContent = [];
let test = '123';

onMount(async () => {
  homeContent = await getHomePageContent();
  console.log('test');
  console.log(homeContent, 'home content');
});

</script>

<p>Testing</p>
<p>{ homeContent }</p>
<p>{ test }</p>
