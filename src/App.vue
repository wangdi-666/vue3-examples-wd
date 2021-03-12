<template>
  <div id="app">
    <sidebar id="sidebar" />
    <!-- 路由要跳转的地址 -->
    <router-view id="router" :key="$route.path" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
// 把Sidebar.vue的内部组件引到sidebar
import sidebar from "@/views/Sidebar.vue";
// 自己定义一个标签
export default defineComponent({
  components: { sidebar }
});
</script>

<style>
/* 整个界面的样式 */
#app {
  margin-top: 10px;
  display: flex;
}

/* 侧边栏的样式 */
#sidebar {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}

#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
