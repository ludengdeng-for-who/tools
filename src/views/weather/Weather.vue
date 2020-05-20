<template>
  <div>
    <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        天气查询
      </template>
    </TopBar>
    <div class="filed">
      <van-field label="地点" type="text" v-model="weather" />
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
    <table class="api_table">
      <tbody>

        <tr>
          <td>当前</td>
          <td v-if="result.realtime">
            <span id="resAreaCode">{{ result.realtime.direct+result.realtime.power }}，
              {{result.realtime.temperature}}<sup>o</sup>C
            ，{{result.realtime.info}}</span>
          </td>
        </tr>
        <tr v-for="item in result.future" :key="item.date">
          <td>{{item.date}}</td>
          <td>
            <span id="resAreaCode">{{ item.direct }}，{{item.temperature}}
            ，{{item.weather}}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
export default {
  components: {
    TopBar,
  },
  data(){
      return {
          weather:"",
          result:{}
      }
  },
  methods: {
    goBack() {
      this.back();
    },
    async search(){
      const res = await this.$http.get(`/weather?city=${this.weather}`)
      this.result = res.data
    }
  },
};
</script>

<style lang="less" scoped>
.filed {
  margin: 10px;
}
.btn {
  margin: 10px;
}
.api_table{
    padding: 10px;
}
</style>
