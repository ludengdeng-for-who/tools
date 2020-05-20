<template>
  <div class="phone">
    <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        IP地址查询
      </template>
    </TopBar>
    <!-- 输入手机号，调起手机号键盘 -->
    <div class="filed">
      <van-field v-model="ip" type="tel" label="IP地址" />
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
    <table class="api_table">
      <tbody>
        <tr>
          <td width="120">IP地址</td>
          <td>
            <span id="resPhoneNo">{{ this.ip }}</span>
          </td>
        </tr>
        <tr>
          <td>国家/地区</td>
          <td>
            <span id="resLoc"
              >{{ this.data.province }}&nbsp;{{ this.data.Country }}</span
            >
          </td>
        </tr>
        <tr>
          <td>省份</td>
          <td>
            <span id="resSp">{{ this.data.Province }}</span>
          </td>
        </tr>
        <tr>
          <td>城市</td>
          <td>
            <span id="resAreaCode">{{ this.data.City }}</span>
          </td>
        </tr>
        <tr>
          <td>运营商</td>
          <td>
            <span id="resAreaCode">{{ this.data.Isp }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import {Notify} from 'vant'
import TopBar from "@/components/TopBar";
Vue.use(Notify);
export default {
  components: {
    TopBar,
  },
  data() {
    return {
      ip: "",
      data: {
      },
    };
  },
  created() {},
  methods: {
    goBack() {
      this.back();
    },
    async search() {
      if(this.ip === ""){
        Notify({ type: 'warning', message: 'ip不能为空' });
        return
      }
      this.$http.get("/ip?ip="+ this.ip)
      .then(res => {
        console.log(res);
        this.data = res.data;
      })
    }
  },
};
</script>

<style lang="less" scoped>
.phone{
  width: 100vw;
  height: 100vh;
  background-color: #07c160;
}
.filed {
  margin: 0 10px 20px 10px;
}
.btn {
  padding: 10px;
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
