<template>
  <div class="add">
    <div class="wrapper">
        <van-nav-bar
  title="标题"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
      <van-uploader v-model="fileList" multiple />
      <van-cell-group>
        <van-field v-model="value" placeholder="标题" />
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="详细介绍"
          type="textarea"
          maxlength="100"
          placeholder=""
          show-word-limit
        />
      </van-cell-group>
      <van-goods-action>
 
  <van-goods-action-button type="danger" text="发布" />
</van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ],
      value: "",
      message: ""
    };
  },
  methods:{
      onClickLeft(){
         this.$router.push({path:'/'})
      }
  }
};
</script>
<style scoped>

</style>
<style>
.add .van-uploader{
    margin:0.3rem 0;
}
.add .van-cell{
  text-align: left;
}
</style>