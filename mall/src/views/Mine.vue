<template>
  <div class="mine">
    <div class="login" v-if="login">
      <div class="user">
        <div class="user-img">
          <img src="../assets/img/用户.png">   
        </div>
        <span class="user-name">不爱吃鱼的猫</span>
        <ul class="user-nav">
          <li class="user-label">
            <span>关注</span>
            <span>10</span>
          </li>
          <li class="user-label">
            <span>粉丝</span>
            <span>10</span>
          </li>
          <li class="user-label">
            <span>收藏</span>
            <span>10</span>
          </li>
        </ul>
      </div>
      <div class="transcations">
        <van-tabs v-model="active">
          <van-tab title="已上传商品">
            <van-card 
              price="3500"
              title="二手闲置99新的iPad Air"
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
              price="3500"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="unlogin" v-if="unlogin">
      <div class="unlogin-img">
        <!-- <img class="unlogin-user-img"> -->
         <img src="../assets/img/用户.png"> 
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
    <van-button round block type="info" class="submit" @click="Login">
      登录
    </van-button>
     <van-button round block type="info"  class="register" @click="regist">
      注册
    </van-button>
  </div>
 
</van-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
export default {
  data() {
    return {
      active: 2,
      username: '',
      password: '',
      login:false,
      unlogin:true,
    };
  },
   methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    Login(){
       let data = {
        userName: this.username,
        password: this.password
      };
      axios({
        method: "post",
        url: "/user/login",
        data: Qs.stringify(data)
      })
        .then(res => {
          if (res.data.code == 0) {
           this.unlogin=false;
           this.login=true;
          }
        })
        .catch(res => {
          console.log(res);
        });
    }
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

/* img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: url('../assets/img/用户.png') no-repeat;
 background-size:100%;
 border:0;
} */

.user-name {
  display: block;
  margin: 0 auto;
  margin-top: 0.05rem;
  font-size: 0.3rem;
}
.user-nav {
  width: 3rem;
  height: 1rem;
  margin: 0 auto;
  margin-top: 0.1rem;
  font-size: 0.25rem;
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
.mine .van-tab__text {
  font-size: 0.25rem !important;
}
</style>
<style>
.unlogin .van-cell{
  font-size: 0.32rem;
  line-height:0.55rem;
}
</style>