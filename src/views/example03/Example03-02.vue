<template>
  <div>
    <p>支持保存组件实例，在组件从dom移除后缓存，再次加载时直接使用原实例</p>
    <button type="button" @click="change = !change">change</button>
    <br />
    <keep-alive>
      <namelogin v-if="change" />
    </keep-alive>
    <keep-alive>
      <emaillogin v-if="!change" />
    </keep-alive>
    <br />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import namelogin from "./NameLogin.vue";
import emaillogin from "./EmailLogin.vue";

export default defineComponent({
  components: { namelogin, emaillogin },
  data: () => ({
    change: true
  })
});
</script>
