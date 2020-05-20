<template>
  <div class="history">
    <div class="top">
      <TopBar>
        <template v-slot:left>
          <div @click="goBack">
            <van-icon name="arrow-left" />
          </div>
        </template>
        <template v-slot:center>
          历史上的今天
        </template>
      </TopBar>
    </div>
    <div class="date">
      <div>年份：{{ year }}</div>
      <div>月份：{{ month }}</div>
      <div>日期：{{ day }}</div>
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large" >查询</van-button>
    </div>
    <ul>
      <li v-for="item in data" :key="item.e_id">
         <van-icon name="fire-o" />
        {{ item.date }}:{{ item.title }}
      </li>
    </ul>
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
      date: new Date(),
      data: {},
    };
  },
  computed: {
    year() {
      let year = this.date.getFullYear();
      return year;
    },
    month() {
      let month = this.date.getMonth() + 1;
      return month;
    },
    day() {
      let day = this.date.getDate();
      return day;
    },
  },
  methods: {
    async search() {
      this.$http.get(`/history?day=${this.day}&month=${this.month}`)
      .then(res=>{
        this.data = res.data;
      })
    },
    goBack() {
      this.back();
    },
  },
};
</script>

<style lang="less" scoped>
.history {
  background-color: #07c160;
}
.top {
  position: sticky;
  top: 0;
  z-index: 9;
}
.date {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: sticky;
  top: 44px;
  z-index: 9;
  background-color: #07c160;
}
.btn {
  margin: 10px;
}
li{
    padding: 6px 10px;
}
</style>
