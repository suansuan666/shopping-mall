<template>
  <div class="goodDetail">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div>

    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="咨询" @click="chat" />
      <van-goods-action-icon icon="like-o" text="收藏" @click="like" />
      <van-goods-action-button type="danger" text="立即购买" @click="payment" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:'/'})
    },
    payment(){
        this.$router.push({name:'payment',params: {goodId: '111'}})
    }
  }
};
</script>
<style scoped>
.swiper {
  height: 3rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
