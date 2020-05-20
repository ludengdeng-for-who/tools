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
        生肖配对
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
    <div class="res">{{data}}</div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";

export default {
  components:{
    TopBar
  },
  data(){
    return {
      data:"",
      value1: 0,
      value2: 0,
      option1: [
        { text: "鼠", value: 0 },
        { text: "牛", value: 1 },
        { text: "虎", value: 2 },
        { text: "兔", value: 3 },
        { text: "龙", value: 4 },
        { text: "蛇", value: 5 },
        { text: "马", value: 6 },
        { text: "羊", value: 7 },
        { text: "猴", value: 8 },
        { text: "鸡", value: 9 },
        { text: "狗", value: 10 },
        { text: "猪", value: 11 },
      ],
       option2: [
        { text: "鼠", value: 0 },
        { text: "牛", value: 1 },
        { text: "虎", value: 2 },
        { text: "兔", value: 3 },
        { text: "龙", value: 4 },
        { text: "蛇", value: 5 },
        { text: "马", value: 6 },
        { text: "羊", value: 7 },
        { text: "猴", value: 8 },
        { text: "鸡", value: 9 },
        { text: "狗", value: 10 },
        { text: "猪", value: 11 },
      ],
    }
  },
  methods:{
    search(){
       let man = this.option1[this.value1].text;
      let woman = this.option2[this.value2].text;
      this.$http.get(`/shengxiao?man=${man}&woman=${woman}`)
      .then(res=>{
        this.data  = res.data.data;
        console.log( this.result);
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
  margin: 10px;
}
.res{
  padding: 10px;
}
</style>