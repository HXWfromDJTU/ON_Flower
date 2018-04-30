<template>
  <van-nav-bar title="蜗牛花艺" left-arrow />
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
  }
}
</script>
