import store from "@/store";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/TaskView.vue"),
  },
  {
    path: "/auth",
    name: "AuthView",
    component: () => import("../views/AuthView.vue"),
  },

  {
    path: "/client",
    name: "ClientView",
    component: () => import("../views/ClientView.vue"),
  },

  {
    path: "/developer",
    name: "DeveloperView",
    component: () => import("../views/DeveloperView.vue"),
  },

  {
    path: "/task",
    name: "TaskView",
    component: () => import("../views/TaskView.vue"),
  },

  {
    path: "/contract",
    name: "ContractView",
    component: () => import("../views/ContractView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const redirectAuthView = (next: any) => {
  next({
    name: "AuthView",
  });
}

const redirectMain = (next: any) => {
  next({
    name: "TaskView",
  });
}

router.beforeEach(async (to, from, next) => {
  if (!cookies.get("token") && to.name != "AuthView") {
    redirectAuthView(next);
    return;
  }

  if (!store.getters.getProfile) {
    await store.dispatch("acitonProfile");
  }

  if (store.getters.getProfile && to.name == "AuthView") {
    redirectMain(next);
  }

  if (cookies.get("token") && store.getters.getProfile == null) {
    redirectAuthView(next);
  }

  next();
});

export default router;
