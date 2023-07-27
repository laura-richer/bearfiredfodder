<script>
export let headerNavItems = [];
</script>

<header class="header">
  <div class="header__logo">
    Logo
  </div>
  <nav>
    {#each headerNavItems as navItem, index}
      <div>
        <a href="#section-{index + 1}">{navItem}</a>
      </div>
    {/each}
  </nav>
</header>
