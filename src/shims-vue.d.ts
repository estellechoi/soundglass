declare module "*.vue" {
  import type { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "@vue/runtime-core" {
  import { ComponentCustomProperties } from "vue";
  import { Store } from "vuex";

  // Declare your own store states.
  interface State {
    count: number;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
