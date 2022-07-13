import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WelcomeView from "../views/WelcomeView.vue";
import AppInfoView from "../views/AppInfoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/welcome",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/app-info",
      name: "appInfo",
      component: AppInfoView,
    },
  ],
});

export default router;
