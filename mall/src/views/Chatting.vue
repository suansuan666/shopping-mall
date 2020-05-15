<template>
  <div class="chat-box">
    <van-nav-bar :title="seller.userName" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- <header>正在与卖家聊天</header> -->
    <div class="msg-box" ref="msg-box">
      <div
        v-for="(i,index) in list"
        :key="index"
        class="msg"
        :style="i.userId == userId?'flex-direction:row-reverse':''"
      >
        <div class="user-head">
          <!-- <div
            class="head"
            :style="` background: hsl(${getUserHead(i.userId,'bck')}, 88%, 62%); clip-path:polygon(${getUserHead(i.userId,'polygon')}% 0,100% 100%,0% 100%); transform: rotate(${getUserHead(i.userId,'rotate')}deg)`"
          ></div>-->
          <!-- <van-icon name="manager" color="#1989fa" size="20"/> -->
          <div>
            <img src="../assets/img/用户.png" />
          </div>
        </div>
        <div class="user-msg">
          <span
            :style="i.userId == userId?' float: right;':''"
            :class="i.userId == userId?'right':'left'"
          >{{i.content}}</span>
        </div>
      </div>
    </div>
    <div class="input-box">
      <input type="text" ref="sendMsg" v-model="contentText" @keyup.enter="sendText()" />
      <div class="btn" :class="{['btn-active']:contentText}" @click="sendText()">发送</div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      ws: null,
      count: 0,
      userId: null, //当前用户ID
      list: [], //聊天记录的数组
      contentText: "", //input输入的值
      seller: {
        userName: "爱吃鱼的猫"
      }
    };
  },
  created() {
    this.getUserID();
  },
  mounted() {
    this.initWebSocket();
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "good-detail" });
    },
    //根据时间戳作为当前用户ID
    getUserID() {
      let time = new Date().getTime();
      this.userId = time;
    },
    //根据userID生成一个随机头像
    getUserHead(id, type) {
      let ID = String(id);
      if (type == "bck") {
        return Number(ID.substring(ID.length - 3));
      }
      if (type == "polygon") {
        return Number(ID.substring(ID.length - 2));
      }
      if (type == "rotate") {
        return Number(ID.substring(ID.length - 3));
      }
    },
    //滚动条到底部
    scrollBottm() {
      let el = this.$refs["msg-box"];
      el.scrollTop = el.scrollHeight;
    },
    //发送聊天信息
    sendText() {
      let _this = this;
      _this.$refs["sendMsg"].focus();
      if (!_this.contentText) {
        return;
      }
      let params = {
        userId: _this.userId,
        msg: _this.contentText
      };
      if (_this.ws.readyState === 1) {
        _this.ws.send(JSON.stringify(params));
      } else {
        //do something
      }
      // _this.ws.send(JSON.stringify(params)); //调用WebSocket send()发送信息的方法
      _this.contentText = "";
      setTimeout(() => {
        _this.scrollBottm();
      }, 500);
    },
    //进入页面创建websocket连接
    initWebSocket() {
      let _this = this;
      //判断页面有没有存在websocket连接
      if (window.WebSocket) {
        // 192.168.0.104 是我本地IP地址 此处的 :8181 端口号 要与后端配置的一致
        let ws = new WebSocket("ws://192.168.0.100:8181");
        _this.ws = ws;
        ws.onopen = function() {
          console.log("服务器连接成功");
        };
        ws.onclose = function() {
          console.log("服务器连接关闭");
        };
        ws.onerror = function() {
          console.log("服务器连接出错");
        };
        ws.onmessage = function(e) {
          //接收服务器返回的数据
          let resData = JSON.parse(e.data);
          if (resData.funName == "userCount") {
            _this.count = resData.users;
            _this.list = resData.chat;
            console.log(resData.chat);
          } else {
            _this.list = [
              ..._this.list,
              { userId: resData.userId, content: resData.msg }
            ];
          }
        };
      }
    }
  }
};
</script>
 
<style lang="scss" scoped>
.chat-box {
  margin: 0 auto;
  background: #fafafa;
  position: absolute;
  height: 100%;
  width: 100%;
  header {
    position: fixed;
    width: 100%;
    height: 1rem;
    background: #409eff;
    max-width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.4rem;
  }
  .msg-box {
    position: absolute;
    // height: calc(100% - 6.5rem);
    width: 100%;
    margin-top: 0.3rem;
    overflow-y: scroll;
    .msg {
      width: 95%;
      min-height: 1rem;
      //   margin-bottom: 0.5rem;

      position: relative;
      display: flex;
      justify-content: flex-start !important;
      .user-head {
        width: 20%;
        width: 0.7rem;
        height: 0.7rem;
        // border-radius: 50%;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        position: absolute;
      }
      .user-msg {
        width: 80%;
        position: absolute;
        word-break: break-all;
        position: absolute;
        right: 0;
        z-index: 5;
        span {
          // max-width:3rem;
          display: inline-block;
          padding: 0.1rem;
          border-radius: 0.2rem;
          margin-top: 0.1rem;
          font-size: 0.3rem;
        }
        .left {
          max-width: 50%;
          float: right;
          margin-right: 1rem;
          background: #53a8ff;
          color: white;
          animation: toLeft 0.5s ease both 1;
        }
        .right {
          margin-right: 1rem;
          background: #53a8ff;
          color: white;
          animation: toright 0.5s ease both 1;
        }
        @keyframes toLeft {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        @keyframes toright {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
      }
    }
  }
  .input-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background: #fafafa;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      height: 0.5rem;
      display: inline-block;
      width: 100%;
      padding: 0.1rem;
      border: none;
      border-radius: 0.1rem;
      font-size: 0.3rem;
    }
    .btn {
      height: 0.5rem;
      width: 2rem;
      background: #409eff;
      padding: 0.1rem;
      font-size: 0.3rem;
      color: white;
      text-align: center;
      border-radius: 0.1rem;
      //   margin-left: 0.5rem;
    }
    .btn-active {
      background: #409eff;
    }
  }
}
</style>