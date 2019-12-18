<template>
  <div class="login">
    <!-- 使用el的布局容器 -->
    <div class="main">
      <el-row class="row">
        <!-- 在el 中 栅格为24 -->
        <el-col :span="12" class="left">
          <div>
            <el-carousel height="600px">
              <el-carousel-item v-for="item in 3" :key="item">
                <div :class="['carousel-img','item'+item]">
                  <div>
                    <p>阿坤{{item}}</p>
                    <p>@{{item}}</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
            <div>
              <img src="@/assets/logo.png" alt />
            </div>
          </div>
        </el-col>
        <el-col :span="12" class="right">
          <div>
            <el-form label-width="80px">
              <h2>登录</h2>
              <el-form-item label="用户名">
                <el-input type="text" v-model="value1" placeholder="请输入用户名"/>
              </el-form-item>
              <el-form-item label="密码" v-model="value2" placeholder="请输入密码">
                <el-input type="password" />
              </el-form-item>
              <el-form-item>
                <el-Button style="width:100%" type="primary" @click="login">登录</el-Button>
              </el-form-item>
              <el-form-item>
                <div style="text-align:center">
                  <el-Button type="text">立即注册</el-Button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <p>卜卜卜卜卜卜卜卜布</p>
      <p>卜卜卜卜卜卜卜卜布不不不不不不不不不</p>
      <p>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      value1 : "",
      value2 : "",
    };
  },
  methods:{
    login(){
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为sass现在改名了 现在叫scss */
// 使用scss的高级css语法
.login {
  background: rgb(237, 237, 237);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  .main {
    //等同于 .login .main
    width: 1100px;
    // margin: 0 auto;
    height: 600px;
    border: 1px solid #ccc;
    //设置阴影 x y 半径 颜色
    box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
    border-radius: 4px;
    // box-sizing: border-box;
    .row {
      height: 100%;
      .left {
        & > div {
          position: relative;
          img {
            position: absolute;
            width: 50px;
            height: 50px;
            left: 40px;
            top: 40px;
            z-index: 99;
          }
          .carousel-img {
            position: relative;
            height: 100%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            &.item1 {
              background-image: url("https://account.djicdn.com/pc/static/img/1.e61fc72.jpg");
            }
            &.item2 {
              background-image: url("https://account.djicdn.com/pc/static/img/2.643c4c1.jpg");
            }
            &.item3 {
              background-image: url("https://account.djicdn.com/pc/static/img/3.61f61fa.jpg");
            }
            div {
              position: absolute;
              right: 40px;
              bottom: 100px;
              p {
                color: white;
                font-size: 28px;
                font-weight: 600;
                line-height: 1.3;
                text-align: right;
              }
              p:last-child {
                font-size: 14px;
                margin-top: 5px;
              }
            }
          }
        }
        // .carousel-im:nth-of-type(1){
        //     background: red;
        // }
        // .carousel-im:nth-child(2){
        //     background: white;
        // }
        // .carousel-im:nth-child(3){
        //     background: yellow;
        // }
        // .carousel-im:nth-child(4){
        //     background: green;
        // }
      }
      .right {
        background: #fff;
        height: 100%;
        &>div{
          padding: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          form{
            width: 70%;
          }
          h2{
            text-align: center;
            font-size: 30px;
            font-weight: 600;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
  .footer {
    margin-top: 20px;
    color: #979797;
    font-size: 12px;
    // 设置字体居中
    text-align: center;
    line-height: 2;
  }
}
</style>