import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  // 这里把退出登录的方法写在这里，其实登录的方法也可以写在这里，我把写在组件和写在actions中都尝试一下
  // actions: {
  //   LogOut ( { commit, state }) {
  //     return new Promise
  //   }
  // }
})
