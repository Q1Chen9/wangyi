import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

import Vue from 'vue'

// 1, 安装 npm install vue-router@3.6.5
// 2, 引入
import VueRouter from 'vue-router'
// 3, 初始化
Vue.use(VueRouter)
// 4, 新建一个vue-router实例
const router = new VueRouter({
  // routes 路由规则们
  // route 一条路由规则 { path: 路径, component: 组件}
    routes: [
      {path: '/find',component: Find},
      {path: '/My',component: My},
      {path: '/Friend',component: Friend}
    ]
})
 export default router

