import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      let id = window.location.href.split("#")[1];
      if (id.length) {
        let yOffset = -40;
        let element = document.getElementById(id);
        if (element) {
          let y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          return { top: y, behavior: "smooth" };
        }
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

export default router;
