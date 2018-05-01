<template>
  <Layout description="vue server side render" keywords="egg, vue, webpack, server side render">

  </Layout>
</template>
<style >
@import "home.css";
</style>
<script type="text/babel">
export default {
  components: {

  },
  data() {
    return {

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
    //下拉加载
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
    this.fetch()
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

