import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 自己写的函数
const routes: Array<RouteRecordRaw> = [
  {
    // path为要跳转的地方
    path: "/example01",
    component: () => import("@/views/example01/example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/example02.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
