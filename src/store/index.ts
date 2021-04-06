import { createStore, MutationTree, ActionTree, GetterTree } from "vuex";
import { Course, User } from "@/datasource/Types";
import { listCourses } from "@/datasource/DataSource";
import * as vxt from "./VuexTypes";
// 声明State类型的接口
export interface State {
  user?: User;
  courses: Course[];
}
const myState: State = {
  user: {
    name: "BO",
    address: "956",
    level: 1
  },
  courses: []
};
// 通过store的commit()函数激活指定时间并发送数据
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data),
  [vxt.LIST_COURSES]: (state, data: Course[]) => (state.courses = data)
};

// 不用管第二个State，基于module模块时使用
const myActions: ActionTree<State, State> = {
  // 仍需要调用同步事件，2秒后更新
  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  },
  [vxt.LIST_COURSES]: ({ commit }) => {
    const courses = listCourses();
    setTimeout(() => commit(vxt.LIST_COURSES, courses), 2000);
  }
};
const myGetters: GetterTree<State, State> = {
  premission: state => (level: number) => state.user?.level == level,
  [vxt.GETTER_PREMISSION]: state => (level: number) =>
    state.user?.level == level
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {}
});
