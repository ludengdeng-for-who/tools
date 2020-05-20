<template>
  <div>
    <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        成语词典
      </template>
    </TopBar>
    <div class="filed">
      <van-field label="成语" type="tel" v-model="word" />
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>

    <table class="api_table">
      <tbody>
        <tr>
          <td width="120">概念</td>
          <td width="200">
            <span id="resPhoneNo">{{ res.chengyujs }}</span>
          </td>
        </tr>
        <tr>
          <td>举例</td>
          <td width="200">
            <span id="resLoc">{{ res.example }}</span>
          </td>
        </tr>
        <tr>
          <td>反义</td>
          <td width="200">
            <span id="resSp" v-for="item in res.fanyi" :key="item"
              >{{ item }}&nbsp;</span
            >
          </td>
        </tr>
        <tr>
          <td>典故</td>
          <td width="200">
            <span id="resAreaCode">{{ res.from_ }}</span>
          </td>
        </tr>
        <tr>
          <td>同义</td>
          <td width="200">
            <span id="resAreaCode">
              <span id="resSp" v-for="item in res.tongyi" :key="item"
                >{{ item }}&nbsp;</span
              >
            </span>
          </td>
        </tr>
        <tr>
          <td>语法</td>
          <td width="200">
            <span id="resAreaCode">{{ res.yufa }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import { Notify } from "vant";
export default {
  components: {
    TopBar,
    Notify,
  },
  data() {
    return {
      word: "",
      res: {},
    };
  },
  methods: {
    goBack() {
      this.back();
    },
    async search() {
      if (this.word === "") {
        Notify({ type: "warning", message: "成语不能为空" });
        return;
      }
      this.$http.get("/word?word=" + this.word).then((res) => {
        if (res.data.reason === "查询不到该成语的相关信息") {
          Notify({ type: "warning", message: "查询不到该成语的相关信息" });
          return;
        }else{
          this.res = res.data.result;
        }
      });
    },
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
  }
</style>
