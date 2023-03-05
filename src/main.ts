import { createApp, markRaw } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

export const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
