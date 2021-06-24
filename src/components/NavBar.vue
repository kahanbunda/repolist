<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Inza Github Repos</router-link>
    <nav>
      <router-link :to="{ name: 'repo-list' }">List</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  color: #39b982;
  text-decoration: none;
}

.nav .nav-item {
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  box-sizing: border-box;
  margin: 0 5px;
}

.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
