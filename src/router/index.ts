import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

const routes: Array<RouteRecordRaw> = [
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

router.beforeEach(async (to, from, next) => {
  console.log(to.name);
  if (!cookies.get("token") && to.name !== "AuthView") {
    next({
      name: "AuthView",
    });
  }
  next();
});

export default router;
