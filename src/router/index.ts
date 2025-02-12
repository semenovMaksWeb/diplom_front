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
    path: "/executor",
    name: "ExecutorView",
    component: () => import("../views/ExecutorView.vue"),
  },

  {
    path: "/task",
    name: "TaskView",
    component: () => import("../views/TaskView.vue"),
  },

  {
    path: "/contract",
    name: "Organization",
    component: () => import("../views/OrganizationView.vue"),
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

  if (!store.getters.getProfile && to.name == "AuthView") {
    await store.dispatch("acitonProfile");
  }

  if (store.getters.getProfile && to.name == "AuthView") {
    redirectMain(next);
    return;
  }

  if (cookies.get("token") && !store.getters.getProfile && to.name != "AuthView") {
    redirectAuthView(next);
    return;
  }

  next();
});

export default router;
