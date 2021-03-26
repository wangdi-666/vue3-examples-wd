<template>
  <div>
    <p>
      可在视图直接通过$store.state获取state中数据。
      <br />
      {{ $store.state.user.name }} / {{ $store.state.user.address }}
    </p>
    <hr />
    <p>
      useStore()函数必须在setup()中使用。可以传递store对象给自定义use函数。
      <br />
      组件内声明的user变量必须通过计算属性绑定state user。否则state
      user更新，组件user变量不会响应式更新。
    </p>
    <p>{{ userS.name }} / {{ userS.address }}</p>
    <hr />
    <p>
      通过mapState，获取state指定属性名称的值。
      <br />
      {{ user.name }} / {{ user.address }}
      <br />
    </p>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { computed, defineComponent } from "vue";
import { mapState, Store, useStore } from "vuex";

export default defineComponent({
  setup() {
    // 通过泛型声明State类型
    const store: Store<State> = useStore();
    // 声明计算属性绑定
    const userS = computed(() => store.state.user);
    return {
      userS
    };
  },
  // vue2的方法，也可以用，直接写在state中声明数据对象的名字，用字符串形式写"user"
  computed: {
    ...mapState(["user"])
  }
});
</script>
