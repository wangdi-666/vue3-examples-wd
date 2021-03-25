<template>
  <div>
    <!-- 老师代码 -->
    <h1>Homework01</h1>
    <p style="font-weight: bold">
      <span :style="{ color: point >= requiredPoint ? 'green' : 'red' }">
        {{ point }}
      </span>
      /{{ requiredPoint }}
    </p>
    <div class="course">
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="courseSelects" :value="c" />
          {{ c.name }} - {{ c.point }} ({{ c.term }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of courseSelects" :key="index">
        {{ c.name }} - {{ c.point }} ({{ c.term }})
        <br />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { listCourses, Course } from "@/datasource/homework01";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const requiredPoint = 12;
    const c2 = listCourses().sort((a, b) => a.term - b.term);
    const courses = ref<Course[]>(c2);
    const courseSelects = ref<Course[]>([]);
    const point = computed(() => {
      let count = 0;
      courseSelects.value.forEach(c => {
        count = count + c.point;
      });
      // 此计算属性已经监听选择课程的改变
      // 但也可单写watch监听
      // 现在这个函数不能用
      // courseSelects.value.sort((a, b) => a.term - b.term);
      return count;
    });
    return {
      requiredPoint,
      courses,
      courseSelects,
      point
    };
  }
});
</script>
<style scoped>
.course {
  border: 1px solid red;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>
