import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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

export default router;
