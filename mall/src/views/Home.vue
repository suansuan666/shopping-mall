<template>
  <div class="home">
    <van-search
  v-model="value"
  show-action
  placeholder="请输入搜索关键词"
  @search="onSearch"
  clearable="true"
>
  <template #action>
    <div @click="onSearch" class="search">搜索</div>
  </template>
</van-search>
<div class="nav">
    <van-button  type="info">服饰</van-button>
    <van-button  type="info">3C</van-button>
    <van-button  type="info">日用品</van-button>
    <van-button  type="info" @click="more">更多分类</van-button>
</div>
    <div class="variety">
      <ul >
        <li class="variety-item" v-for="(item, index) in productList" :key="index">
          <div class="picture">
            <img :src="item.url" >
          </div>
          <p>{{item.title}}</p> 
           <div class="variety-item-intro">
            <span class="price">￥{{item.money}}</span>
            <div class="likes">
              <van-icon name="star-o" />
              <van-icon name="star" v-if="0" />
              <span class="numbers"> {{item.isCollection}}</span>
            </div>
           </div>
        </li>
        <!-- <li class="variety-item">
          <router-link :to="{name: 'good-detail',params: { goodId: 1111}}">          
          <img class="picture" />
          </router-link>
          <p>ootd|对镜自拍</p>
          <div class="variety-item-intro">
            <span class="price">￥100</span>
            <div class="likes">
              <van-icon name="like-o" />
              <van-icon name="like" v-if="0" />
              <span class="numbers">11</span>
            </div>
          </div>
        </li> -->
      
       
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
export default {
  data(){
    return{
      productList:[
        {
          url:require('../assets/img/凉拖.jpg'),
          title:'99新凉拖闲置',
          money:'9.9',
          isCollection:3
        },
        {
          url:require('../assets/img/手机壳.jpg'),
          title:'iphone xs手机壳',
          money:'15',
          isCollection:10
        },
        {
           url:require('../assets/img/bm连衣裙.jpg'),
          title:'全新BM套装连衣裙',
          money:'200',
          isCollection:8
        },
        {
           url:require('../assets/img/nb鞋.jpg'),
          title:'闲置nb鞋，买来不到半年',
          money:'300',
          isCollection:5
        },
        {
           url:require('../assets/img/coach包.jpg'),
          title:'coach包 闲置',
          money:'1500'
        },{
           url:require('../assets/img/迪克T恤.jpg'),
          title:'实体店入的迪克t恤',
          money:'100'
        }
      ],
      value:''
    }
  },
  methods:{
    more(){
      this.$router.push('/kinds')
    },
    getInfo(){
      let data = {
       userId:4
      };
      axios({
        method: "post",
        url: "/goods/getMainInfoByUserId",
        data: Qs.stringify(data)
      })
        .then(res => {
          if (res.data.code == 0) {
          this.productList=res.data.data.goodsList;
          console.log("liushanshan",this.productList);
          }
        })
        .catch(res => {
          console.log(res);
        });
    },
     onSearch(val) {
      Toast(val);
    },
  },
  created(){
    this.getInfo();
  }
};
</script>
<style lang="scss" scoped>
.variety {
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    flex-basis: 45%;
    &-intro {
      width: 3rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin: 0 auto;
    }
  }
  .picture {
    width: 3rem;
    height: 3rem;
    // background: orange;
    border-radius: 3%;
  }
  .user {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: yellow;
    float: left;
  }
  .likes {
    height: 0.4rem;
    line-height: 0.4rem;
    float: right;
  }
  .numbers {
    display: inline-block;
  }
  .user-name {
    font-size: 0.15rem;
    float: left;
    margin-left: 0.1rem;
    margin-top: -0.03rem;
  }
  .price{
    float: left;
    color: red;
    font-size: 0.25rem;
  }
}
.nav .van-button--normal {
  margin:0 0.2rem;
  font-size: 0.25rem;
  height: 30px;
  line-height: 30px;
  background: #FFE4B5;
  color: #778899;
  border-color: navajowhite;
}
.nav{
  margin-top:0.2rem;
}
.search{
  font-size: 0.25rem;
}

</style>
<style>
.van-field__control{
  font-size: 0.25rem !important
}
.home .van-icon::before{
  margin-top:0.03rem;
}
.home .van-cell__title, .van-cell__value {
  margin-top:0.1rem;
  padding-left:0.1rem;
}
img{
  width:100%;
  height:100%;
}
</style>