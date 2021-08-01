import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Removed in Vue3
// Vue.config.productionTip = false;

const app = Vue.createApp(App);
app.use(store);
app.use(router);

// app.config.globalProperties.$http = () => {}

router.isReady().then(() => app.mount("#app"));
