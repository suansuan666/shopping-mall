<template>
  <div class="community">
    <div class="wrapper">
      <ul>
        <li v-for="(item,index) in items" :key="index">
           <div class="title">
        <div class="user-img">
          <img  :src="item.url" class="user" />
        </div>
        <div class="user-info">
          <div class="user-name">{{item.userName}}</div>
          <div class="user-time">{{item.date}}</div>
        </div>
      </div>
      <div>
        <div class="issue">
          <img class="issue-img" :src="item.issue"/>
        </div>
        <p
          class="intro"
        >{{item.comment}}</p>
        <div class="icon">
          <van-icon name="like-o" />
          <van-icon name="like" v-if="0" />
          <van-icon name="chat-o" />
        </div>
      </div>
        </li>
      </ul>
     
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import {getCookie} from '../util.js'
export default {
  data(){
    return{
      userId:'',
      items:[{
        url:require('../assets/img/用户.png'),
        userName:'球球是只猫',
        date:'05-01',
        issue:require('../assets/img/coach包.jpg'),
        comment:'自己海淘的coach tabby ，这个包今年风超大，可是买回来觉得不太适合自己，所以就闲置出来了，感兴趣的快来找我聊聊吧'
      },
      {
         url:require('../assets/img/女孩.png'),
        userName:'喜欢吃火锅的罗希',
        date:'04-21',
        issue:require('../assets/img/手机壳.jpg'),
        comment:'前俩月买的xs手机壳，用了差不多一周吧，99新。'
      }
      ]
    }
  },
  methods:{
    getInfo(){
       let data = {
       userId:this.userId
      };
      axios({
        method: "post",
        url: "/goods/getMainInfoByUserId",
        data: Qs.stringify(data)
      })
        .then(res => {
          if (res.data.code == 0) {
          this.items=res.data.data;
          
          }
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  created(){
   
    this.userId=getCookie('userId');
  //   this.getInfo();
    // console.log(a);
  }
};
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
/* .user {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: orange;
} */
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
  height: 5rem;
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