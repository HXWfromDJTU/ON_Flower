<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="shop">热销</van-tabbar-item>
    <van-tabbar-item icon="chat" dot>社区</van-tabbar-item>
    <van-tabbar-item icon="records" info="5">花市</van-tabbar-item>
    <van-tabbar-item icon="gold-coin" info="20">我的</van-tabbar-item>
  </van-tabbar>
</template>
<style>
@import "./footer.css";
</style>
<script type="text/babel">
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
