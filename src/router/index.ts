import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/elem-tmpl",
    component: () => import("@/views/elem/define-tmpl.vue"),
  },
  {
    path: "/tsx",
    component: () => import("../views/antd/define-tsx.vue"),
  },
  {
    path: "/tmpl",
    component: () => import("@/views/antd/script-tmpl.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
