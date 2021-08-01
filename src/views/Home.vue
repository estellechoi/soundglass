<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
