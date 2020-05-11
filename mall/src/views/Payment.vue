<template>
  <div class="payment">
    <van-nav-bar title="确认下单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-card
      :price='production.price'
      :title="production.title"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
/>
<van-dialog v-model="show"  show-cancel-button>
  <img src="../assets/img/二维码.png" />
</van-dialog>
    <van-submit-bar :price="300000" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>
<script>
export default {
  data(){
    return{
       show: false,
      production:{
        title:'闲置二手99新iPad Air',
        price:'3000'
      },
       chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        }
      ],
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "good-detail", params: { goodId: "111" } });
    },
    onSubmit(){
      this.show=true;
    }
  }
};
</script>
<style scoped>

.payment .van-address-list__add{
  display: none;
}
.payment .van-submit-bar__bar{
  margin-bottom: 0.2rem;
}
.payment .van-submit-bar__text span{
  font-size: 0.3rem;
}
.payment .van-address-item__address{
  font-size: 0.24rem;
}
.van-address-item__tag{
  font-size: 0.23rem;
}
</style>
<style>
.van-card__bottom {
  text-align: right;
  margin-right: 0.2rem;
}
.van-card{
  font-size: 0.25rem;
}
.van-card__price {
  font-size: 0.3rem;
}
</style>