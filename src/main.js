import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//使用elementui
//引入elementui的css库
//这是es6的引入方法 如果没有返回值 就直接引入 则代表引入整个文件
import 'element-ui/lib/theme-chalk/index.css'
//引入elementui的组件库
import elementUi from 'element-ui';

// vue.use 方法代表 设置vue的全局组件 以便于每次使用对应的组件不需要第二次引入
// 把elementUI 引入到vue中 使其变成全局组件
Vue.use(elementUi);

Vue.config.productionTip = false

new Vue({
  router, // 将router路由的配置注册到vue实例
  store, // 将vuex的配置到vue实例
  render: h => h(App) // 将试图渲染到vue实例
}).$mount('#app') // 将#app的dom 绑定给vue实例
