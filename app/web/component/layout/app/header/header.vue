<template>
  <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
</template>
<style>
@import "./header.css";
</style>
<script type="text/babel">
export default {
  data() {
    return {
      selectedMenu: '/app'
    }
  },
  computed: {

  },
  mounted() {
    this.selectedMenu = window.location.pathname.toLowerCase().replace(/\/$/, '');
  }
}
</script>
