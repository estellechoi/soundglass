<template>
  <nav class="navbar flex justify-between items-center">
    <div class="navbar__logo">soundglass</div>
    <ul class="hidden">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {}
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  width: 100vw;
  height: 60px;
  z-index: 9999;
  color: var(--color-white);
  background-color: var(--color-primary-opacity);
  backdrop-filter: blur(6px) opacity(1);
  border-bottom: 1px solid var(--color-white);
  padding: var(--padding-nav-v) var(--padding-nav-h);

  .navbar__logo {
    width: 100px;
    font-size: 34px;
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-narrow);
  }
}
</style>
