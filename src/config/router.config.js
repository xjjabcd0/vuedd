import Home from '../views/Home.vue'

// 路由配置文件只放配置信息
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // 配置login页面
    path: '/login',
    name: 'login',
    // 导入login页面需要展示的内容
    // 懒加载导入 可以省略.vue
    component:() => import('@/views/user/Login')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]
// 在其他玩家使用需要把默认router导出
export default routes
