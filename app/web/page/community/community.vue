<template>
  <layout>
    <van-tabs type="line" @click="gotoAddress">
      <van-tab title="推荐"></van-tab>
      <van-tab title="热门"></van-tab>
      <van-tab title="订阅"></van-tab>
    </van-tabs>
    <router-view></router-view>
  </layout>
</template>
<style>
@import "community.css";
</style>
<script type="text/babel">
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  components: {

  },
  computed: {

  },
  methods: {
    gotoAddress(index) {
      let address = "";
      switch (index) {
        case 0:
          address = "/community/recommend"
          break;
        case 1:
          address = "/community/hot";
          break;
        case 2:
          address = "/community/subcribe";
          break;
        default:
          address = "";
      }
      this.$router.push(address)
    }
  }
}
</script>

