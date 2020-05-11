<template>
<div class="foot-bar">
     <van-tabbar>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/community" icon="aim">社区</van-tabbar-item>
      <van-tabbar-item icon="add" to="/add" class="add"></van-tabbar-item>
      <van-tabbar-item to="/message" icon="envelop-o">消息</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="manager-o">我</van-tabbar-item>
    </van-tabbar>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.foot-bar .add{
  color: #FFE4B5;
}

</style>
<style>
.add .van-tabbar-item__icon{
  font-size: 0.5rem !important
}
</style>