<template>
  <div id="app">
    <router-view></router-view>
    <!-- <van-tabbar>
      <van-tabbar-item to="/home">首页</van-tabbar-item>
      <van-tabbar-item to="/community">社区</van-tabbar-item>
      <van-tabbar-item icon="add" to="/add"></van-tabbar-item>
      <van-tabbar-item to="/message">消息</van-tabbar-item>
      <van-tabbar-item to="/mine">我</van-tabbar-item>
    </van-tabbar> -->
    <router-view name="foot-bar"></router-view>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
    
  },
   
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
