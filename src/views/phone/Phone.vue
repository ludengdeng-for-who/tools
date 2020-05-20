<template>
  <div class="phone">
    <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        号码归属查询
      </template>
    </TopBar>
    <!-- 输入手机号，调起手机号键盘 -->
    <div class="filed">
      <van-field v-model="tel" type="tel" label="手机号" />
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
    <table class="api_table">
      <tbody>
        <tr>
          <td width="120">手机号码段</td>
          <td>
            <span id="resPhoneNo">{{ this.tel }}</span>
          </td>
        </tr>
        <tr>
          <td>卡号归属地</td>
          <td>
            <span id="resLoc"
              >{{ this.data.province }}&nbsp;{{ this.data.city }}</span
            >
          </td>
        </tr>
        <tr>
          <td>运营商</td>
          <td>
            <span id="resSp">{{ this.data.company }}</span>
          </td>
        </tr>
        <tr>
          <td>区号</td>
          <td>
            <span id="resAreaCode">{{ this.data.areacode }}</span>
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
      tel: "",
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
      if(this.tel === ""){
        Notify({ type: 'warning', message: '号码不能为空' });
        return
      }
      this.$http.get("/phone?phone="+this.tel)
      .then((res)=>{
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
    width: 120px;
  }
</style>
