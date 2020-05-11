<template>
  <div class="kinds">
    <van-nav-bar
      title="商品分类"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="服饰" />
      <van-sidebar-item title="美妆" />
      <van-sidebar-item title="食品" />
      <van-sidebar-item title="3C产品" />
      <van-sidebar-item title="生活用品" />
      <van-sidebar-item title="箱包" />
      <van-sidebar-item title="饰品" />
      <van-sidebar-item title="乐器" />
    </van-sidebar>
    <ul class="variety">
        <li v-for="(item,index) in costume" :key="index" class="variety-item">
            <div class="picture">
            <img :src="item.url" >
          </div>
          <p>{{item.title}}</p> 
           <!-- <div class="variety-item-intro">
            <span class="price">￥{{item.money}}</span>
            <div class="likes">
              <van-icon name="star-o" />
              <van-icon name="star" v-if="0" />
              <span class="numbers"> {{item.isCollection}}</span>
            </div>
           </div> -->
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      costume:[
         {
          url:require('../assets/img/乐町短裙.jpg'),
          title:'乐町黄色格子裙',
          money:'9.9',
          isCollection:3
        },
        {
          url:require('../assets/img/牛仔裤.jpg'),
          title:'gxg家牛仔裤',
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
           url:require('../assets/img/针织衫.jpg'),
          title:'针织衫 闲置',
          money:'1500'
        },{
           url:require('../assets/img/迪克T恤.jpg'),
          title:'实体店入的迪克t恤',
          money:'100'
        },{
       url:require('../assets/img/印花衬衣.jpg'),
       title:'日系印花衬衣'
        },
        {
            url:require('../assets/img/白色衬衣.jpg'),
            title:'文艺工装衬衣'
        }
      ]
    };
  },
  methods:{
      onClickLeft(){
          this.$router.push('/')
      }
  }
};
</script>
<style lang="scss" scoped>
.kinds .van-sidebar{
    margin-top:0.2rem;
    float: left;
}
.kinds .van-sidebar-item--select{
    background-color: #FFEBCD
}
.variety {
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  margin-left:1.8rem;
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    float: left;
    width:2rem;
    margin-left:0.2rem;
    &-intro {
      width: 2rem;
      height: 0.4rem;
      line-height: 0.4rem;
      margin: 0 auto;
    }
  }
  .picture {
    width: 2rem;
    height: 2rem;
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
</style>