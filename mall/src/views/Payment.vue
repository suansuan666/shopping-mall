<template>
  <div>
    <van-nav-bar title="确认下单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push({ name: "good-detail", params: { goodId: "111" } });
    }
  }
};
</script>
<style scoped>
</style>