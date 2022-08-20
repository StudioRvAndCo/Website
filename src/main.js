import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueSplide from "@splidejs/vue-splide";
import VueObserveVisibility from "vue-observe-visibility";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube, faTwitter, faInstagram, faTwitch);

createApp(App)
  .use(VueObserveVisibility)
  .use(router)
  .use(i18n)
  .use(VueSplide)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
