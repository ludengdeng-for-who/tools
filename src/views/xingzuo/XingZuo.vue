<template>
  <div class="xingzuo">
    <div class="top">
      <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        星座配对
      </template>
    </TopBar>
    </div>
    <div class="male">
      <div>男</div>
      <div>女</div>
    </div>

    <div class="select">
      <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
    <table class="api_table">
      <tbody>
        <tr>
          <td >吻合度</td>
          <td width="260">
                <van-circle v-model="result.zhishu" :rate="0" :speed="100" :text="result.zhishu+''" size="80px" />
          </td>
        </tr>
        <tr>
          <td >结果</td>
          <td width="260">
                {{result.jieguo}}
          </td>
        </tr>
        <tr>
          <td >恋爱</td>
          <td width="260">
                {{result.lianai}}
          </td>
        </tr>
        <tr>
          <td >注意</td>
          <td width="260">
                {{result.zhuyi}}
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
  // 
  data() {
    return {
      currentRate:30,
      score:"30",
      value1: 0,
      value2: 0,
      option1: [
        { text: "水瓶", value: 0 },
        { text: "双鱼", value: 1 },
        { text: "白羊", value: 2 },
        { text: "金牛", value: 3 },
        { text: "双子", value: 4 },
        { text: "巨蟹", value: 5 },
        { text: "狮子", value: 6 },
        { text: "处女", value: 7 },
        { text: "天秤", value: 8 },
        { text: "天蝎", value: 9 },
        { text: "射手", value: 10 },
        { text: "摩羯", value: 11 },
      ],
       option2: [
        { text: "水瓶", value: 0 },
        { text: "双鱼", value: 1 },
        { text: "白羊", value: 2 },
        { text: "金牛", value: 3 },
        { text: "双子", value: 4 },
        { text: "巨蟹", value: 5 },
        { text: "狮子", value: 6 },
        { text: "处女", value: 7 },
        { text: "天秤", value: 8 },
        { text: "天蝎", value: 9 },
        { text: "射手", value: 10 },
        { text: "摩羯", value: 11 },
      ],
      result :{}
    };
  },
  methods: {
    goBack() {
      this.back();
    },
    search(){
      let man = this.option1[this.value1].text;
      let woman = this.option2[this.value2].text;
      console.log(man,woman);
      
      this.$http.get(`/xingzuo?man=${man}&woman=${woman}`)
      .then(res=>{
        this.result  = res.data;
         this.result.zhishu = +this.result.zhishu;
      })
    }
  },
};
</script>

<style lang="less" scoped>
.top{
  z-index: 9;
  position: sticky;
  top: 0;
}
.xingzuo{
  background-color: #07c160;
}
.male {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  div {
    text-align: center;
    flex: 1;
  }
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
.select{
  padding: 10px;
}
.btn{
  padding: 10px;
}
</style>
