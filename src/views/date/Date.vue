<template>
  <div>
    <div class="top">
      <TopBar>
        <template v-slot:left>
          <div @click="back">
            <van-icon name="arrow-left" />
          </div>
        </template>
        <template v-slot:center>
          万年历
        </template>
      </TopBar>
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
        <table class="api_table">
      <tbody>
        <tr>
          <td width="120">生肖</td>
          <td>
            <span id="resPhoneNo">{{data.animalsYear}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">建议</td>
          <td>
            <span id="resPhoneNo">{{data.avoid}}</span>
          </td>
        </tr>
        <tr>
          <td width="120">农历</td>
          <td>
            <span id="resPhoneNo">{{data.lunar}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">日期</td>
          <td>
            <span id="resPhoneNo">{{data.date}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">年份</td>
          <td>
            <span id="resPhoneNo">{{data.lunarYear}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">事宜</td>
          <td>
            <span id="resPhoneNo">{{data.suit}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">星期</td>
          <td>
            <span id="resPhoneNo">{{data.weekday}}</span>
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
          data:false
      }
  },
  methods: {
    search() {
        this.$http.get("/date")
        .then(res=>{
            this.data = res.data.data;
            console.log(this.data);
        })
    },
  },
};
</script>

<style lang="less" scoped>
.btn{
    margin: 10px;
}
table{
   border-collapse:collapse;
   display: flex;
   justify-content: center;
}
 th, td
  {
  border: 1px solid #fff;
  }
  td{
    text-align: center;
    padding: 2px;
    width: 140px;
  }
</style>
