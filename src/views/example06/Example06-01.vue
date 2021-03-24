<template>
  <div>
    <h1>Form Binding</h1>
    <!-- form表单的相关绑定 -->
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <!-- 基于id的对象绑定 -->
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <!-- label和input是一个整体，用template抽象抽象标签包裹 -->
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="button">提交</button>
    </form>
    <!-- 改变的值显示到视图上 -->
    <p>{{ user }}</p>
    <hr />
    <br />
    <!-- $event.target.files[0]用来获取文件 -->
    <input type="file" @change="fileChange($event.target.files[0])" />
    <br />
    <p>{{ file.fileName }} / {{ file.fileSize }}</p>
    <br />
  </div>
</template>
<script lang="ts">
import { listCourses, listTitles } from "@/datasource/DataSource";
import { User } from "@/datasource/Types";
import { defineComponent, Ref, ref } from "vue";

// 接口仅用于属性约束，声明的属性与接口内相同，即为相同类型
interface VFile {
  fileName: string;
  fileSize: string;
}
function useFile(file: Ref<VFile>) {
  const fileChange = (f: File) => {
    console.log(f);
    file.value.fileName = f.name;
    file.value.fileSize = `${(f.size / 1024 / 1024).toFixed(2)} MB`;
  };
  return {
    fileChange
  };
}

export default defineComponent({
  setup() {
    // 声明双向数据绑定时，数组属性必须显示说明，否则视图不知道是数组，其他类型可忽略
    // 用rel声明响应式数据
    const user = ref<User>({ courses: [] });
    // 与前面接口里面声明的类型一样
    const file = ref({ fileName: "", fileSize: "" });
    // Titles和Courses无需响应式，因此不需要rel()函数
    const titles = listTitles();
    const courses = listCourses();
    const { fileChange } = useFile(file);
    return {
      user,
      titles,
      courses,
      file,
      fileChange
    };
  }
});
</script>
