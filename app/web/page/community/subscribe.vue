<template>
    <div>
        <MessageCard v-for="(item,index) in essay.data" :imgUrlArr="item.imgUrlArr" :text="item.text" :userInfo="item.userInfo" :time="item.time">

        </MessageCard>
    </div>
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
            essay: {
                data: [
                    {
                        id: 12,
                        userInfo: {
                            avatarUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            username: 'April',
                            bref: "蜗牛工作室发起人~"
                        },
                        time: "2017-09-12 23:13:05",
                        imgUrlArr: [
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg"
                        ],
                        text: "文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花"
                    }, {
                        id: 13,
                        userInfo: {
                            avatarUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            username: 'April',
                            bref: "蜗牛工作室发起人~"
                        },
                        time: "2017-09-12 23:13:05",
                        imgUrlArr: [
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg"
                        ],
                        text: "文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花"
                    }, {
                        id: 12,
                        userInfo: {
                            avatarUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            username: 'April',
                            bref: "蜗牛工作室发起人~"
                        },
                        time: "2017-09-12 23:13:05",
                        imgUrlArr: [
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg"
                        ],
                        text: "文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花"
                    }, {
                        id: 12,
                        userInfo: {
                            avatarUrl: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            username: 'April',
                            bref: "蜗牛工作室发起人~"
                        },
                        time: "2017-09-12 23:13:05",
                        imgUrlArr: [
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg",
                            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3392700520,12160564&fm=200&gp=0.jpg"
                        ],
                        text: "文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花文墨观花"
                    },
                ]
            }
        }
    },
    mounted() {
        console.log(this.$route)
    },
    components: {

    },
    computed: {

    },
    methods: {
        gotoAddress(address) {
            this.$router.push(address)
        }
    }
}
</script>

