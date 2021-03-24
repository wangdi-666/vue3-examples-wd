<template>
  <div>
    <p>
      与视图元素的绑定与vue2完全不同。需要声明元素，以及绑定函数，在视图元素通过:ref绑定函数
    </p>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <!-- 一开始agreed的值为false，利用v-model实现双向绑定，当同意条款选了，agreed值为true -->
      <label>
        <input type="checkbox" v-model="agreed" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses" :key="index">
        <label>
          <!-- 将函数绑定到ref属性，渲染时，自动执行函数，并将当前元素对象添加到数组 -->
          <!-- 通过disabled="!agreed"控制，当同意为真时，disabled值为false，复选框可选 -->
          <input
            :ref="chRefs"
            type="checkbox"
            v-model="sCoursesRef"
            :value="{ id: c.id }"
            :disabled="!agreed"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <!-- 未同意和以选择数量小于指定数量任一项为真，则提交按钮不可用 -->
      <button type="button" :disabled="!agreed || sCoursesRef.length < amount">
        submit
      </button>
    </form>
    <p>
      {{ sCoursesRef }}
    </p>
  </div>
</template>
<script lang="ts">
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
import { defineComponent, ref, watch } from "vue";

// 模拟曾经选中的数据
const selectedCourses: Course[] = [{ id: 7 }];
export default defineComponent({
  setup() {
    // 声明预获取元素对象/数组
    const checkboxs: HTMLInputElement[] = [];
    // 声明一个函数，将传入的元素对象绑定到对象，数组则压入数组
    const chRefs = (el: HTMLInputElement) => checkboxs.push(el);
    const amount = 2;
    // 模拟数据塞到数组里面
    const sCoursesRef = ref<Course[]>(selectedCourses);
    const agreed = ref(false);
    const courses = listCourses();
    // 监听，选择课程的响应式数据
    watch(sCoursesRef, () => {
      // 当数组中数据>=2时，checkboxDis为true，
      const checkboxDis = sCoursesRef.value.length >= amount;
      // 如果为选中状态，checked为true，过滤掉选中的，让其他为不可用状态
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });
    return {
      amount,
      sCoursesRef,
      agreed,
      courses,
      chRefs
    };
  }
});
</script>
