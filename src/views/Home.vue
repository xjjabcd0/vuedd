<template>
  <div class="home">
    <nav>
      <div class="z-container">
        <div>
          <a href="#">社会招聘</a>
          <a href="#">校园招聘</a>
          <a href="#">关于大疆</a>
        </div>
        <div>
          <a href="#">登录</a>
        </div>
      </div>
    </nav>
    <div class="main">
      <div>
        <p>未来无所不能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
    <footer>
      <div class="z-container">
        <p>我，秦始皇，打钱</p>
        <a href="#">akun官网</a>
        <a href="#">llll</a>
        <a href="#">阿你妈妈</a>
        <a href="#">关于我们</a>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  height: 100%;
  nav {
    position: absolute;
    top: 0;
    left: 0;
    height: 70px;
    background: #fff;
    width: 100%;
    .z-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        img {
          widows: 50px;
          height: 30px;
        }
        a {
          color: #3b3c40;
          font-size: 14px;
          line-height: 70px;
          margin-right: 34px;
        }
        a:hover {
          color: #44a8f2;
        }
      }
    }
  }
  .main {
    height: 100%;
    background-size: cover;
    background-position: 50%;
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
    font-size: 33px;
    color: #fff;
    line-height: 1.5;
    text-align: center;
    div {
      padding-top: 200px;
    }
  }
  footer {
    background: #fff;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 60px;
    .z-container {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #979797;
      p {
        margin-right: 34px;
      }
      a {
        color: #979797;
        margin-right: 4px;
        font-size: 13px;
      }
    }
  }
}
</style>
