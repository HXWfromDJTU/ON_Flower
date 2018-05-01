<template>
    <div class="message-card-wrapper">
        sasasa
    </div>
</template>
<style scoped>
.message-card-wrapper {
  width: 100%;
  height: 200px;
  background-color: red;
}
</style>
<script>
export default {
    name: "messageCard",
    data() {

    },
    props: {
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
    }
}
</script>

