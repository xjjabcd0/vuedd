<template>
  <div id="app">
    <!-- router渲染的占位符 -->
    <!-- 整页路由路由替换 直接在app.vue中使用router-view 不需要其他的元素 -->
    <router-view/>
  </div>
</template>

<style lang="scss">
// 初始化css 
// 在style标签中引入css
@import url('../public/reset.css');
html,body,#app{
  //设置高度为100%
  height: 100%;
}
//设置字体样式
#app{
  font-family:  Open Sans,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}
.z-container{
  width: 1180px;
  margin: 0 auto;
  display: block;
}
a{
  text-decoration: none;
  color: #233333;
}
</style>
