<template>
  <layout title="egg-view-vue#unittest" description="vue server side render" keywords="vue server side render">
    <img class="user-poster" :src="userInfo.avatar">
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" /> 待付款
      </van-col>
      <van-col span="6">
        <van-icon name="pending-orders" /> 待接单
      </van-col>
      <van-col span="6">
        <van-icon name="pending-deliver" /> 待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" /> 待发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="个人小站" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="exchange" title="文章" is-link />
      <van-cell icon="gold-coin" title="报名活动" is-link />
      <van-cell icon="gift" title="消息" is-link />
    </van-cell-group>
  </layout>
</template>
<style lang="less">
@import "me.css";
.user {
  &-poster {
    width: 100%;
    height: 160px;
    display: block;
  }
  &-group {
    margin-bottom: 0.3rem;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
<script type="text/babel">

export default {
  data() {
    return {
      userInfo: {
        avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525199001274&di=51535dd7b4da5428cebf0c64f55f2349&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D06f216a0c3ea15ce55e3e84ade695086%2F37d3d539b6003af33f4ea4453f2ac65c1038b61a.jpg"
      }
    }
  },
  components: {

  },
  computed: {

  },
  methods: {

  },
  mounted() {

  }
}
</script>

