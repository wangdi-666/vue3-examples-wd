import { listCourses } from "@/datasource/DataSource";
import { User } from "@/datasource/Types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
// 过滤http前缀请求
mock.onGet(/^http/).passThrough();

// 地址，支持JS正则表达式
// 正则表达式中 \，由转义符，\/，替代
// 匹配任意字符，\w+；
// $，结束。避免匹配多个
// 整个表达式，置于/  /之间
// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/{uid}; /users/{uid}/courses/{hid}
function path(p: string) {
  const reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}
// ===================================

export interface ResultVO {
  code: number;
  message?: string;
  data?: any;
}
const resulVO: ResultVO = {
  code: 200,
  data: {}
};

//reply的参数列表 (status, data, headers)
//status，http状态码  data是返回的json数据
mock.onGet("users/12").reply(200, {
  code: 200,
  data: { user: { id: 1, name: "BO" } as User }
} as ResultVO);

// 等价于 users/任意值
mock.onGet(path("users/{uid}")).reply(200, {
  code: 200,
  data: { user: { id: 2, name: "SUN" } as User }
} as ResultVO);

// users/4/coursess/21
mock.onGet(path("users/{uid}/courses")).reply(200, {
  code: 200,
  data: { courses: listCourses() }
} as ResultVO);
