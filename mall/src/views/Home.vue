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
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
    <div class="variety">
      <ul>
        <!-- <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <img :src="item.img" alt>
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </li>-->
        <li class="variety-item">
          <router-link :to="{name: 'good-detail',params: { goodId: 1111}}">
          
          <img class="picture" />
          </router-link>
          <p>ootd|对镜自拍</p>
          <div class="variety-item-intro">
            <!-- <img class="user" />
            <span class="user-name">爱吃兔子的胡萝卜</span> -->
            <span class="price">￥100</span>
            <div class="likes">
              <van-icon name="like-o" />
              <van-icon name="like" v-if="0" />
              <span class="numbers">11</span>
            </div>
          </div>
        </li>
        <li class="variety-item">
          <img class="picture" />
          <p>ootd|对镜自拍</p>
          <div class="variety-item-intro">
            <img class="user" />
            <div>
              <van-icon name="like-o" v-if="0" />
              <van-icon name="like" />
              <span class="numbers">11</span>
            </div>
          </div>
        </li>
        <li class="variety-item">
          <img class="picture" />
          <p>ootd|对镜自拍</p>
          <div class="variety-item-intro">
            <img class="user" />
            <div>
              <van-icon name="like-o" />
              <van-icon name="like" v-if="0" />
              <span class="numbers"></span>
            </div>
          </div>
        </li>
        <li class="variety-item">
          <img class="picture" />
          <p>ootd|对镜自拍</p>
          <div class="variety-item-intro">
            <img class="user" />
            <div>
              <van-icon name="like-o" />
              <van-icon name="like" v-if="0" />
              <span class="numbers"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
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
    background: orange;
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
  }
}
</style>
<style>

.home .van-icon::before{
  margin-top:0.03rem;
}
.home .van-cell__title, .van-cell__value {
  margin-top:0.1rem;
  padding-left:0.1rem;
}
</style>