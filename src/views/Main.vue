<template>
  <div class="main">
    <TopBar>
      <template v-slot:center>工具小库</template>
    </TopBar>
    <van-row>
      <van-col span="6" class="cols" @click="goRouter('phone')">
        <van-icon class="icons" name="phone-circle-o" />
        <div class="title">号码归属</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('history')">
        <van-icon class="icons" name="browsing-history-o" />
        <div class="title">历史今天</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('news')">
        <van-icon class="icons" name="coupon-o" />
        <div class="title">每日新闻</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('xingzuo')">
        <van-icon class="icons" name="like-o" />
        <div class="title">星座配对</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="6" class="cols" @click="goRouter('ip')">
        <van-icon class="icons" name="location-o" />
        <div class="title">IP查询</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('word')">
        <van-icon class="icons" name="comment-o" />
        <div class="title">成语词典</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('weather')">
        <van-icon class="icons" name="flag-o" />
        <div class="title">天气查询</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('joke')">
        <van-icon class="icons" name="star-o" />
        <div class="title">每日一笑</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="6" class="cols" @click="goRouter('money')">
        <van-icon class="icons" name="balance-list-o" />
        <div class="title">汇率查询</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('star')">
        <van-icon class="icons" name="smile-o" />
        <div class="title">星座运势</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('gold')">
        <van-icon class="icons" name="chart-trending-o" />
        <div class="title">黄金数据</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('shengxiao')">
        <van-icon class="icons" name="gem-o" />
        <div class="title">生肖配对</div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="6" class="cols" @click="goRouter('car')">
        <van-icon class="icons" name="logistics" />
        <div class="title">品牌查询</div>
      </van-col>
      <van-col span="6" class="cols" @click="goRouter('date')">
        <van-icon class="icons"  name="notes-o" />
        <div class="title">万年历表</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  components: {
    TopBar,
  },
  methods: {
    goRouter(path) {
      this.$router.push("/" + path);
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100vw;
  height: 100vh;
  .cols {
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .title {
      font-size: 14px;
      margin: 2px 0 20px 0;
    }
  }
  .icons {
    font-size: 30px;
  }
}
</style>
