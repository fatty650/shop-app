// 导入 Vue 和 Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './cart.js'
import moduleUser from './user.js'

Vue.use(Vuex)

// 创建 Store 的实例对象
const store = new Vuex.Store({
  // TODO：挂载 store 模块
  modules: {
    // 挂载购物车的 vuex 模块，模块内成员的访问路径被调整为 m_cart
    m_cart: moduleCart,
	// 挂载用户的 vuex 模块，访问路径为 m_user
	m_user: moduleUser,
  },
})

// 向外共享 Store 的实例对象
export default store

const app = new Vue({
  ...App,
  // 将 store 挂载到 Vue 实例上
  store,
})
app.$mount()