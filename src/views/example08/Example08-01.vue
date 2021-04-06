<template>
  <div>
    <h1>传参</h1>
    <p></p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>createTime</td>
        <td>operation</td>
      </tr>
      <tr v-for="(c, index) in courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          {{ c.name }}
        </td>
        <td>{{ c.createTime }}</td>
        <td><editbutton :course="c" /></td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { LIST_COURSES } from "@/store/VuexTypes";
import { computed, defineComponent } from "vue";
import { Store, useStore } from "vuex";
import editbutton from "./EditButton.vue";
// 在视图中引入子组件editbutton
export default defineComponent({
  components: { editbutton },
  setup() {
    useStore().dispatch(LIST_COURSES);
    const store: Store<State> = useStore();
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
