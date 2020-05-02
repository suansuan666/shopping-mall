<template>
  <div class="mine">
    <div class="login" v-if="1">
      <div class="user">
        <div class="user-img">
          <img />
        </div>
        <span class="user-name">爱吃兔子的萝卜</span>
        <ul class="user-nav">
          <li class="user-label">
            <span>关注</span>
            <span>10</span>
          </li>
          <li class="user-label">
            <span>粉丝</span>
            <span>10</span>
          </li>
          <li class="user-label-sp">
            <span>获赞与收藏</span>
            <span>10</span>
          </li>
        </ul>
      </div>
      <div class="transcations">
        <van-tabs v-model="active">
          <van-tab title="已上传商品">
            <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
          </van-tab>
          <van-tab title="交易记录">
            <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
          </van-tab>
          <van-tab title="下线商品">
            <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="unlogin" v-if="0">
      <div class="unlogin-img">
        <img class="unlogin-user-img">
      </div>
      <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div class="btn">
    <van-button round block type="info" native-type="submit" class="submit">
      登录
    </van-button>
     <van-button round block type="info" native-type="submit" class="register">
      注册
    </van-button>
  </div>
 
</van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
       username: '',
      password: '',
    };
  },
   methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>
<style scoped>
li {
  float: left;
}
.user-img {
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.unlogin-img{
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.unlogin-user-img{
  width:100%;
  height:100%;
  border-radius: 50%;
  background: yellowgreen;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: orange;
}
.user-name {
  display: block;
  margin: 0 auto;
  margin-top: 0.05rem;
}
.user-nav {
  width: 3.3rem;
  height: 1rem;
  margin: 0 auto;
  margin-top: 0.1rem;
}
.user-label {
  width: 0.5rem;
  margin-right: 0.5rem;
}
.user-label-sp {
  width: 1.2rem;
}
.btn{
  margin:1rem 0.2rem;
}
.submit{
  margin-bottom: 0.2rem;
  font-size: 0.32rem;
}
.register{
  background: none;
  color:#1989fa;
  font-size: 0.32rem;
}
</style>
<style>
.unlogin .van-cell{
  font-size: 0.32rem;
  line-height:0.55rem;
}
</style>