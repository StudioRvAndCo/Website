import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueObserveVisibility from "vue-observe-visibility";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faTwitch,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(
  faYoutube,
  faTwitter,
  faInstagram,
  faTwitch,
  faBars,
  faAngleRight,
  faFacebookF
);

createApp(App)
  .use(VueObserveVisibility)
  .use(router)
  .use(i18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
