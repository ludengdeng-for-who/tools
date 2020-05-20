<template>
  <div class="money">
    <div class="top">
      <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        汇率一览
      </template>
    </TopBar>
    </div>
    <div class="info">
      <div class="btn" @click="search">
      <van-button type="default" size="large">获取汇率</van-button>
    </div>
    <div class="title">更新时间：{{ data.update }}</div>
    <div class="item" v-for="item in data.list" :key="item[0]">
      人民币--------------{{ item[0] }}
      <div>100--------------{{ item[1] }}</div>
      <div>100--------------{{ item[2] }}</div>
      <div>100--------------{{ item[3] }}</div>
      <div>100--------------{{ item[4] }}</div>
      <div>100--------------{{ item[5] }}</div>
    </div>
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
      data: {},
    };
  },
  methods: {
    goBack() {
      this.back();
    },
    search() {
      this.$http.get("/money").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.top{
  position: sticky;
  top: 0;
  z-index: 9;
}
.money {
  background-color: #07c160;
}
.btn {
  margin: 10px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info{
  padding: 10px;
}
.item {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px dashed #fff;
}
</style>
