import vue from "vue";
import vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
//1.安装插件
vue.use(vuex);

//2.创建store

const store = new vuex.Store({
  state: {
    cartList: []
  },
  mutations,
  actions,
  getters
});
//3.挂载到Vue实例上
export default store;
