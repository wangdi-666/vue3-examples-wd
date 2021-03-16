<template>
  <div>
    <h1>Vue示例</h1>
    <ul>
      <li><router-link to="/example01">welcome</router-link></li>
      <li>
        <router-link to="/example02">
          data & computed & methods & watch
        </router-link>
      </li>
      <li>
        route with params
        <ul>
          <li>
            <!-- 通过路由传递参数 -->
            <router-link to="/example03/students/12/homeworks/1">
              sid:12; hid:1
            </router-link>
          </li>
          <li>
            <router-link to="/example03/students/74/homeworks/2">
              sid:74; hid:2
            </router-link>
          </li>
        </ul>
      </li>
      <li><router-link to="/example03-02">keep-alive</router-link></li>
      <li><router-link to="/example04-test">wd-example04-test</router-link></li>
      <li>
        Composition-API
        <ul>
          <li><router-link to="/example04-02">reactive()</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
