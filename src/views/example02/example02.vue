<template>
  <div>
    <h1>data()</h1>
    <p>
      <!-- 基于类似于EL表达式 -->
      {{ message }}
    </p>
    <hr />
    <h1>Computed</h1>
    <p>基本绑定，缺少null判断等</p>
    <p>
      对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript
      表达式支持，表达式会作为 JavaScript 解析
    </p>
    {{ isShow ? "为true显示" : "为false显示" }}
    <br />
    <!-- 完成的具体操作写在了computed中 -->
    {{ reversMessage }}
    <hr />
    {{ user.name }}
    <br />
    <button type="button" @click="change">change</button>
    <br />
    {{ user.insertTime }}
    <br />
    {{ myDate }}
    <br />
    <p>
      data中属性必须提前声明。data中的响应式属性数据，在组件创建时确定，数据可更改，但默认不能添加新属性
      。user.address属性，必须提前声明
    </p>
    <button @click="addAddress">change</button>
    <br />
    {{ user.address }}
    <hr />
    <p>
      计算属性，默认声明的是属性的getter方法，不支持传参。但JS中，参数/属性可以是一个，函数
    </p>
    {{ myReplace(user.insertTime) }}
    <hr />
    <h1>watch</h1>
    <p>
      watch监听器中允许执行异步方法，当仅仅需要监听当值改变而改变值时，应使用计算属性。
    </p>
    <button @click="isShow = !isShow">change isShow</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => ({
    isShow: false,
    message: "hello",
    user: {
      name: "BO",
      insertTime: "2046-04-09T11:04:25",
      address: ""
    }
  }),
  // 方法
  methods: {
    change() {
      this.user.name = "SUN";
    },
    addAddress() {
      this.user.address = "956";
    }
  },
  // 计算属性
  computed: {
    // TS类型声明在后面
    // 不能把它写成箭头函数，因为箭头函数里面不能写this
    myDate(): string {
      // 把T换成空格
      return this.user.insertTime.replace("T", " ");
    },
    // 把字符串hello倒过来
    // 1、split('') 把一个字符串分割成字符串数组
    // 把数据拆分为一个数组,括号里的' '是把数据拆分为每个字符串
    // 2、reverse() 颠倒数组中元素的顺序
    // 只作用于数组，跟在split('')后才能起作用，
    // 在一个字符串后面不起作用，如message.reverse()
    // 3、join('') 把数组中的所有元素放入一个字符串
    // 所以，message.split('').reverse().join('')
    // 意思是把字符串翻转重组成字符串
    // hello→olleh
    reversMessage(): string {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    // 返回一个函数
    myReplace() {
      return (date: string) => date.replace("T", " ");
    }
    // myReplace() {
    //   return (date: string): string => {
    //     return date.replace("T", " ");
    //   };
    // }
  },
  // 异步
  watch: {
    isShow(newValue, oldValue) {
      alert(`新值为${newValue}`);
    }
  }
});
</script>
