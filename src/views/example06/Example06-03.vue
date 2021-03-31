<template>
  <div>
    <!-- 自己代码 -->
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
          <input type="checkbox" v-model="sCoursesRef" :value="c" />
          {{ c.name }} - {{ c.point }} ({{ c.term }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of sCoursesRef" :key="index">
        {{ c.name }} - {{ c.point }} ({{ c.term }})
        <br />
      </template>
    </div>
    <p>
      {{ sCoursesRef }}
    </p>
  </div>
</template>

<script lang="ts">
import { Course, listCourses } from "@/views/homework01/homework01";
import { defineComponent, ref, watch } from "vue";

// sort()函数
// function NumAscSort(a,b)
// {
//  return a - b;
// }
// function NumDescSort(a,b)
// {
//  return b - a;
// }
// var arr = new Array( 3600, 5010, 10100, 801);
// arr.sort(NumDescSort);
// alert(arr);
// arr.sort(NumAscSort);
// alert(arr);

export default defineComponent({
  setup() {
    const requiredPoint = 17.5;
    // 这两条代码是对courses中的数据排序，按学期排序显示在页面上
    // const c2 = listCourses().sort((a, b) => a.term - b.term);
    // const courses = ref<Course[]>(c2);
    // 先声明point变量，并为它赋初值为响应式数据0
    const point = ref(0);
    const courses = listCourses();
    const sCoursesRef = ref<Course[]>([]);
    watch(sCoursesRef, () => {
      let count = 0;
      sCoursesRef.value.forEach(c => {
        count = count + c.point;
      });
      point.value = count;
      sCoursesRef.value.sort((a, b) => a.term - b.term);
    });
    // const point = computed(() => {
    //   let count = 0;
    //   sCoursesRef.value.forEach(c => {
    //     count = count + c.point;
    //   });
    //   // sCoursesRef.value.sort((a, b) => a.term - b.term);
    //   return count;
    // });
    return {
      courses,
      sCoursesRef,
      point,
      requiredPoint
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
