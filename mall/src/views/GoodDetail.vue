<template>
  <div class="goodDetail">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="user-label">
      <div class="user">
        <img src="../assets/img/用户.png" />
      </div>
      <span class="username">{{user.userName}}</span>
      <van-button round type="danger" class="homepage">Ta的主页</van-button>
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="panel">
      <van-panel>
        <div class="price">￥{{info.price}} 元</div>
        <div class="title">{{info.title}}</div>
        <div class="detail">{{info.comment}}</div>
      </van-panel>
    </div>
    <div class="message-bar">
      <van-cell-group class="message-group">
        <van-field v-model="value" placeholder="看对眼就留言" class="leave-message" />
        <van-button round type="danger" size="small" class="publish">评论</van-button>
      </van-cell-group>
      <div class="message-label">全部留言</div>
      <ul>
        <li v-for="(writer,index) in writers" :key="index" class="writer-bar">
          <div class="writer-img">
            <img src="../assets/img/女孩.png" />
          </div>
          <span class="writer-name">{{writer.userName}}</span>
          <div class="message-detail">{{writer.comments}}</div>
        </li>
      </ul>
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
    return {
      info: {
        img: "",
        title: "99新的苹果显示器，欢迎来购",
        price: "4500",
        comment:
          "去年买的苹果显示器，因为要毕业了不想带走，所以低价出售，有想法的赶紧来带走吧"
      },
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      user: {
        userName: "不爱吃鱼的猫"
      },
      writers: [
        {
          userName: "蜜蜂喵喵酱",
          comments: "请问是正品吗？"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
    payment() {
      this.$router.push({ name: "payment", params: { goodId: "111" } });
    },
    chat() {
      this.$router.push({ path: "/chatting" });
    }
  }
};
</script>
<style scoped>
.swiper {
  height: 3rem;
}
.goodDetail .van-swipe-item {
  height: 3rem !important;
}
img {
  width: 100%;
  height: 100%;
}
.price {
  text-align: left;
  color: red;
  font-size: 0.3rem;
  margin-left: 0.1rem;
}
.title {
  font-size: 0.32rem;
  color: black;
  /* margin-bottom: 0.2rem; */
  text-align: left;
}
.detail {
  font-size: 0.25rem;
  color: dimgray;
  text-align: left;
}
.goodDetail .van-panel {
  padding: 0.2rem;
}
.user-label {
  margin: 0.2rem 0;
  text-align: left;
  padding-left: 0.2rem;
  height: 0.7rem;
  line-height: 0.7rem;
  position: relative;
}
.user {
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
img {
  width: 100%;
}
.username {
  margin-left: 0.7rem;
  font-size: 0.25rem;
}
.homepage {
  float: right;
  background-color: white;
  color: black;
  border-color: #7788;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
  width: 1.5rem;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
}
.message-bar {
  height: 0.8rem;
}
.leave-message {
  width: 80%;
}
.message-group {
  position: relative;
  height: 0.8rem;
}
.publish {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 2rem;
}
.panel {
  padding-top: -0.2rem;
}
.message-label {
  text-align: left;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}
.writer-bar {
  position: relative;
  text-align: left;
  height: 1rem;
}
.writer-img {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.3rem;
}
.writer-name {
  display: inline-block;
  line-height: 1rem;
  margin-left: 0.9rem;
  font-size: 0.25rem;
}
.message-detail {
  margin-top: -0.35rem;
  margin-left: 0.9rem;
  font-size: 0.25rem;
  color: #778899;
}
</style>
