<template>
  <div class="joke">
    <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        每日一笑
      </template>
    </TopBar>
    <div class="btn" @click="search">
      <van-button type="default" size="large">随机获取笑话</van-button>
    </div>
    <div class="joke-item" v-for="item in list" :key="item.hashId">
      {{ item.content }}
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  components: {
    TopBar,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    goBack() {
      this.back();
    },
    search() {
      this.$http.get("/joke").then((res) => {
        this.list = res.data;
        console.log(this.list);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.joke {
  background-color: #07c160;
}
.btn {
  margin: 10px;
}
.joke-item {
  text-indent: 2em;
  line-height: 1.5;
  padding: 20px 10px;
  border-bottom: 1px dashed #eee;
}
</style>
