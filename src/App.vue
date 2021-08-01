<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from '@/components/NavBar.vue'

export default Vue.defineComponent({
  // setup() {},
  components: {
    NavBar,
  },
})
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: var(--color-ivory);
}
</style>
