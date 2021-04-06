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
    path: "/example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    props: true,
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    props: true,
    path: "/example04-04",
    component: () => import("@/views/example04/Example04-04.vue")
  },
  {
    props: true,
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    props: true,
    path: "/example04-03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    props: true,
    path: "/example05-01",
    component: () => import("@/views/example05/Example05-01.vue")
  },
  {
    props: true,
    path: "/example05-02",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    props: true,
    path: "/example05-03",
    component: () => import("@/views/example05/Example05-03.vue")
  },
  {
    props: true,
    path: "/example05-04",
    component: () => import("@/views/example05/Example05-04.vue")
  },
  {
    props: true,
    path: "/example06-01",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    props: true,
    path: "/example06-02",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    props: true,
    path: "/example06-03",
    component: () => import("@/views/example06/Example06-03.vue")
  },
  {
    props: true,
    path: "/example07-01",
    component: () => import("@/views/example07/Example07-01.vue")
  },
  {
    props: true,
    path: "/example07-02",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    props: true,
    path: "/example07-03",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    props: true,
    path: "/example07-04",
    component: () => import("@/views/example07/Example07-04.vue")
  },
  {
    props: true,
    path: "/example08-01",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    props: true,
    path: "/example08-02",
    component: () => import("@/views/example08/Example08-02.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
