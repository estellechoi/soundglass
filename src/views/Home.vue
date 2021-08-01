<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="flex justify-center" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
