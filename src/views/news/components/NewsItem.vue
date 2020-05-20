<template>
  <div>
    <div class="author">{{ item.author_name }}</div>
    <div class="title">{{ item.title }}</div>
    <img :src="item.thumbnail_pic_s" />
  </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object
        }
    }
};
</script>

<style lang="less" scoped>
img{
  width: 100vw;
}
.title{
  color: #07c160;
}
</style>
