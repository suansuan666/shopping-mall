<template>
  <div class="community">
    <div class="wrapper">
      <div class="title">
        <div class="user-img">
          <img class="user" />
        </div>
        <div class="user-info">
          <div class="user-name">爱吃兔子的胡萝卜</div>
          <div class="user-time">03-13</div>
        </div>
      </div>
      <div>
        <div class="issue">
          <img class="issue-img" />
        </div>
        <p
          class="intro"
        >Vant 是有赞开源的一套基于 Vue 2.0 的 Mobile 组件库。通过Vant，可以快速搭建出风格统一的页面，提升开发效率。目前已有近 50 个组件，这些组件被广泛使用于有赞的各个移动端业务中。 Vant 旨在更快、更简单地开发基于 Vue 的美观易用的移动站点。</p>
        <div class="icon">
          <van-icon name="like-o" />
          <van-icon name="like" v-if="0" />
          <van-icon name="chat-o" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.wrapper {
  padding: 0 0.3rem;
}
.title {
  height: 0.7rem;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;
}
.user {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: orange;
}
.user-img {
  width: 0.6rem;
  height: 0.6rem;
  float: left;
}
.user-info {
  float: left;
  margin-left: 0.2rem;
}
.user-time {
  text-align: left;
  margin-top: -0.1rem;
}
.issue {
  height: 3rem;
}
.issue-img {
  width: 100%;
  height: 100%;
  background: yellowgreen;
  border-radius: 3%;
}
.intro {
  height: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
}
.icon{
    float: right;
    margin-top:0.1rem;
}
.van-icon{
    margin-left:0.2rem;
    font-size: 0.3rem;
}
</style>