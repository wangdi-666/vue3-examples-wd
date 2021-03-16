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
  },
  {
    // 在配置路由规则时，启用props
    props: true,
    path: "/example03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    path: "/example03-02",
    component: () => import("@/views/example03/Example03-02.vue")
  },
  {
    path: "/example04-test",
    component: () => import("@/views/example04/Example04-test.vue")
  },
  {
    props: true,
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
