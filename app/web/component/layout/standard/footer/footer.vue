<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="shop">
      <a href="/home">首页</a>
    </van-tabbar-item>
    <van-tabbar-item icon="chat" dot>
      <a href="/community">社区</a>
    </van-tabbar-item>
    <van-tabbar-item icon="records" info="5">
      <a href="/shop">花市</a>
    </van-tabbar-item>
    <van-tabbar-item icon="gold-coin" info="20">
      <a href="/me">我的</a>
    </van-tabbar-item>
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
