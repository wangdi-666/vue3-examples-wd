import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 判断当前环境，仅在开发环境下引入。生产环境下编译打包忽略
process.env.NODE_ENV == "development" && require("@/mock/index");

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
