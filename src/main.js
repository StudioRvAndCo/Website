import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import i18n from "./i18n"
import store from "./store"
import axios from "axios"
import VueAxios from "vue-axios"

createApp(App)
    .use(store)
    .use(VueAxios, axios)
    .use(i18n)
    .use(router)
    .mount("#app")