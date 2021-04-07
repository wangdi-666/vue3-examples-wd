<template>
  <div>
    <p>
      https://api.github.com/users/wangdi-666
      <br />
      <img :src="user.avatar_url" alt="" style="width: 30%" />
      <br />
      login: {{ user?.login }}
      <br />
      company: {{ user?.company }}
      <br />
      repos_url:
      <!-- :to="{ name: 'example09-02', query: { url: user.repos_url } }" -->
      <!-- 绑定路由并传参 -->
      <router-link :to="`/example09-02?url=${user.repos_url}`">
        {{ user.repos_url }}
      </router-link>
      <br />
      public_repos: {{ user?.public_repos }}
      <br />
      followers: {{ user?.followers }}
      <br />
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// 引入自定义的axios模块
import axios from "@/axios/index";
import { GithubUser } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const user = ref<GithubUser>({});
    // 创建新axios对象，避免与声明了配置的axios冲突
    // .create()避免与后期示例冲突
    axios
      .create() // 仅此示例使用
      .get("https://api.github.com/users/wangdi-666")
      .then(resp => (user.value = resp.data)); //从响应对象中获取数据，将数据置于响应式user对象中去
    return {
      user
    };
  }
});
</script>
