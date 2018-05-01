<template>
  <van-nav-bar title="蜗牛花艺" left-arrow @click-left="goBack()" />
</template>
<style>
@import "./header.css";
</style>
<script type="text/babel">
export default {
  data() {
    return {
      selectedMenu: '/'
    }
  },
  computed: {
  },
  mounted() {
    this.selectedMenu = window.location.pathname.toLowerCase();
  },
  methods: {
    //返回上一次浏览记录
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>
