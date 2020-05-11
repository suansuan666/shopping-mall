<template>
  <div class="add">
    <div class="wrapper">
      <van-nav-bar title="上传商品" left-text="返回" left-arrow @click-left="onClickLeft" />
      <van-uploader v-model="fileList" multiple :after-read="onRead" />
      <van-cell-group>
        <van-field v-model="title" placeholder="请输入标题" />
        <van-field
          v-model="detail"
          rows="2"
          autosize
          label="详细介绍"
          type="textarea"
          maxlength="100"
          placeholder
          show-word-limit
        />
        <van-field v-model="price" type="number" label="价格： ￥" />
      </van-cell-group>
      <van-goods-action>
        <van-goods-action-button type="danger" text="发布" @click="submit" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Qs from "qs";
import { getCookie } from "../util.js";
export default {
  data() {
    return {
      fileList: [
        // { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: "https://cloud-image", isImage: true }
      ],
      title: "",
      detail: "",
      price: "",
      userId: "",
      files: [],
      url: "",
      fil: {},
      
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
    // submit() {
    //   console.log(this.files);
    //   let data = {
    //     userId: this.userId,
    //     title: this.title,
    //     comment: this.detail,
    //     money: this.price,
    //     files: this.files
    //   };
    //   console.log(data);
    //   axios({
    //     method: "post",
    //     url: "/goods/addGoods",
    //     data: Qs.stringify(data, { indices: false })
    //   })
    //     .then(res => {
    //       if (res.data.code == 0) {
    //         Toast.success("发布成功");
    //         this.$router.push("/");
    //       }
    //     })
    //     .catch(res => {
    //       console.log(res);
    //     });
    // },
    onRead(file) {
       console.log(file.file);
      
      // this.url = file.content;
      // this.fil = file.file;
      // this.fil["url"] = this.url;
     // this.files.push(this.fil);
     // console.log(this.fil);

      
    
    },
    submit(content){
        let photos = [];
      this.fileList.forEach(v=> {
    let o = {
        url: v.content,
        filename: v.file.name
    }
    photos.push(o);
    });
    console.log(photos);
      //  let formdata = new FormData();  
      // formdata.append("file", this.dataURLtoFile(content, "file.jpg"));
      axios.post('/goods/addGoods',photos).then(res=>{

      })
    },
    dataURLtoFile(urlData, fileName) {
      var arr = urlData.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], { type: mime }, { name: fileName });
    },
  
  },
  created() {
    this.userId = getCookie("userId");
  }
};
</script>
<style scoped>
</style>
<style>
.add .van-uploader {
  margin: 0.3rem 0;
}
.add .van-cell {
  text-align: left;
}
.add .price {
  width: 1rem;
  margin-top: 1rem;
}
</style>