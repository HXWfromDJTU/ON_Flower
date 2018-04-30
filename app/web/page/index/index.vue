<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(src ,index ) in swiper.img" :key="index">
        <img :src="src" class="swiper-image">
      </van-swipe-item>
    </van-swipe>
    <van-card v-for="(item,index) in hotSale.list" :key="index" :title="item.title" :desc="item.description" :price="item.price" :thumb="item.imgUrl" />
  </Layout>
</template>
<style >
@import "index.css";
.swiper-image {
  width: 100%;
  height: 200px;
}
</style>
<script type="text/babel">
export default {
  components: {

  },
  data() {
    return {
      swiper: {
        img: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525106961818&di=a30562bee9c651f6ac7ce804549de5f8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D269d382b790e0cf3b4fa46bb633e9773%2Fe850352ac65c1038e58c5bfbb9119313b07e891d.jpg"]
      },
      hotSale: {
        list: [{
          title: "喜联花",
          description: "描述描述...........",
          price: 23.45,
          imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525106964236&di=a4c9445e034854f6f785615e058328d0&imgtype=0&src=http%3A%2F%2Fwww.taopic.com%2Fuploads%2Fallimg%2F140420%2F235091-140420115R021.jpg"
        }, {
          title: "俏丽可花",
          description: "描述描述...........",
          price: 99.45,
          imgUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525106964244&di=441543570c7a87d5221a5441e05ed606&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Dba37bf896e380cd7f213aaadc83cc858%2F8435e5dde71190ef7c8fd2e6c51b9d16fdfa6096.jpg"
        }]
      }
    }
  },
  computed: {
    lists() {
      return this.list;
    }
  },
  methods: {
    fetch() {
      this.$http.get(`${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res => {
        console.log('res', res);
        if (res.data.list && res.data.list.length) {
          this.total = res.data.total;
          this.list = this.list.concat(res.data.list);
        } else {
          this.isFinish = true;
        }
        this.isLoading = false;
      });
    },
    loadPage() {
      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true;
        this.pageIndex++;
        setTimeout(() => {
          this.fetch();
        }, 1500);
      }
    }
  },
  mounted() {
    import('service-worker-register').then(sw => {
      console.log(sw);
      sw.default.register('service-worker.js');
    });
    window.addEventListener('scroll', () => {
      this.loadPage();
    }, false);
  }
}
</script>

