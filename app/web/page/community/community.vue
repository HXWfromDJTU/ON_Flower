<template>
  <layout>
    <van-tabs type="line">
      <van-tab title="推荐"></van-tab>
      <van-tab title="热门"></van-tab>
      <van-tab title="订阅"></van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(src ,index ) in swiper.img" :key="index">
        <img :src="src" class="swiper-image">
      </van-swipe-item>
    </van-swipe>
    <!-- title -->
    <van-cell-group>
      <van-cell value="今日精选内容" />
    </van-cell-group>
    <!-- 热门文章列表 -->
    <div class="essay-container">
      <div class="image-box" v-for="(item,index) in hotEssay" :key="item.id">
        <img :src="item.imgUrl">
      </div>
    </div>
  </layout>
</template>
<style>
@import "community.css";
.essay-container {
  text-align: center;
}
.swiper-image {
  width: 100%;
  height: 200px;
}
.image-box {
  width: 45%;
  display: inline-block;
  margin: 5px;
}
.image-box img {
  width: 100%;
  border-radius: 15px;
}
</style>
<script type="text/babel">
export default {
  data() {
    return {
      swiper: {
        img: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525106961818&di=a30562bee9c651f6ac7ce804549de5f8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D269d382b790e0cf3b4fa46bb633e9773%2Fe850352ac65c1038e58c5bfbb9119313b07e891d.jpg"]
      },
      hotEssay: [
        {
          id: 12,
          imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
          title: "文墨观花"
        }, {
          id: 13,
          imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
          title: "文墨观花"
        }, {
          id: 14,
          imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
          title: "文墨观花"
        },
        {
          id: 15,
          imgUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
          title: "文墨观花"
        }
      ]
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

