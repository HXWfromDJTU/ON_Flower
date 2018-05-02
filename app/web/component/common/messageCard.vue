<template>
    <div class="message-card-wrapper">
        <header class="header">
            <van-row>
                <van-col span="4">
                    <img :src="userInfo.avatarUrl" :alt="userInfo.username" class="avatar">
                </van-col>
                <van-col span="14">
                    <div class="user-msg-text username">{{userInfo.username}}</div>
                    <div class="user-msg-text bref"> {{userInfo.bref}}</div>
                </van-col>
                <van-col span="6" class="time-block">
                    {{time}}
                </van-col>
            </van-row>
        </header>
        <content>
            <div class="text-content">
                {{text}}
            </div>
            <div class="image-container">
                <div class="image-wrapper" v-for="(item,index) in imgUrlArr">
                    <img :src="item" :style="'width:'+imageWidth+'%;'">
                </div>
            </div>
        </content>
        <footer>
            <div class="essay-info">
                <van-icon name="password-view" />
                <span>{{ views}}</span>
            </div>
            <div class="essay-info">
                <van-icon name="edit" />
                <span>{{comments}}</span>
            </div>
            <div class="essay-info">
                <van-icon name="like-o" />
                <span>{{ stars }}</span>
            </div>
        </footer>
    </div>
</template>
<style scoped>
.time-block {
  line-height: 20px;
}
.message-card-wrapper {
  margin-bottom: 8px;
}
header {
  height: 45px;
  line-height: 45px;
  background-color: transparent;
  color: black;
  width: 95%;
  margin: 0 auto;
  padding: 5px 0px;
}
.username {
  font-weight: bolder;
}
.bref {
  opacity: 0.5;
}
.user-msg-text {
  height: 20px;
  line-height: 20px;
}
.avatar {
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
}
.essay-info {
  width: 30%;
  display: inline-block;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.essay-info span {
  margin: 0px 10px;
}
.text-content {
  width: 95%;
  margin: 5px auto;
}
.message-card-wrapper {
  width: 100%;
  background-color: lightgrey;
}
.image-wrapper {
  display: inline;
}
.image-wrapper img {
  display: inline;
  margin: 5px;
}
.image-container {
  width: 95%;
  margin: 0 auto;
}
</style>
<script>
export default {
    name: "MessageCard",
    data() {
        return {}
    },
    props: {
        time: {
            type: String,
            default: "刚刚"
        },
        userInfo: {
            type: Object,
            default: () => { }
        },
        text: {
            type: String,
            default: "图片分享"
        },
        imgUrlArr: {
            type: Array,
            default: () => []
        },
        stars: {
            type: Number,
            default: 0
        },
        comments: {
            type: Number,
            default: 0
        },
        views: {
            type: Number,
            default: 0
        }
    },
    computed: {
        imageWidth(val) {
            let width = 100 / (this.imgUrlArr.length || 1);
            if (width < 33) {
                return 33.33
            } else if (width == 25) {
                return 50
            }
            return width;
        }
    }
}
</script>

