import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import VueGtag from "vue-gtag-next";
import "./assets/scss/index.scss";

createApp(App)
  .use(store)
  .use(VueGtag, {
    property: {
      id: "UA-1609229-78",
    },
  })
  .mount("#app");
