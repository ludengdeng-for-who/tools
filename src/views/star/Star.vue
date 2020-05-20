<template>
  <div class="star">
  <div class="top">
        <TopBar>
      <template v-slot:left>
        <div @click="back">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        星座运势
      </template>
    </TopBar>
  </div>

    <div class="male">
      <div>星座</div>
      <div>时期</div>
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
          <td width="120">总体评分</td>
          <td width="200">
                <span>{{data.all}}</span>
          </td>
        </tr>
        <tr>
          <td width="120">幸运颜色</td>
          <td width="200">
                <span>{{data.color}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">健康指数</td>
          <td width="200">
                <span>{{data.health}}</span>
          </td>
        </tr>
        <tr>
          <td width="120">恋爱指数</td>
          <td width="200">
                <span>{{data.love}}</span>
          </td>
        </tr>
         <tr>
          <td width="120">发财指数</td>
          <td width="200">
                <span>{{data.money}}</span>
          </td>
        </tr>
        <tr>
          <td width="120">幸运数字</td>
          <td width="200">
                <span>{{data.number}}</span>
          </td>
        </tr>
        <tr>
          <td width="120">工作指数</td>
          <td width="200">
                <span>{{data.work}}</span>
          </td>
        </tr>
        <tr>
          <td width="120">总结</td>
          <td width="200">
                <span>{{data.summary}}</span>
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
  data() {
    return {
        data:{},
      value1: 0,
      value2: 0,
      option1: [
        { text: "水瓶座", value: 0 },
        { text: "双鱼座", value: 1 },
        { text: "白羊座", value: 2 },
        { text: "金牛座", value: 3 },
        { text: "双子座", value: 4 },
        { text: "巨蟹座", value: 5 },
        { text: "狮子座", value: 6 },
        { text: "处女座", value: 7 },
        { text: "天秤座", value: 8 },
        { text: "天蝎座", value: 9 },
        { text: "射手座", value: 10 },
        { text: "摩羯座", value: 11 },
      ],
      option2: [
        { text: "today", value: 0 },
        { text: "tomorrow", value: 1 },
        { text: "week", value: 2 },
        { text: "month", value: 3 },
        { text: "year", value: 4 },
      ],
    };
  },
  methods:{
      search(){
          this.$http.get(`/star?consName=${this.option1[this.value1].text}&type=${this.option2[this.value2].text}`)
          .then(res =>{
              this.data = res.data;
              console.log(this.data);

          })
      }
  }
};
</script>

<style lang="less" scoped>
.top{
    position: sticky;
    top: 0;
    z-index: 9;
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
.star{
    background-color: #07c160;
}
.btn{
    margin: 10px;
}
.select{
    padding: 10px;
}
</style>
