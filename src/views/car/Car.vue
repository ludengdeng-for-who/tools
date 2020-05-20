<template>
  <div class="car">
    <div class="top">
      <TopBar>
        <template v-slot:left>
          <div @click="back">
            <van-icon name="arrow-left" />
          </div>
        </template>
        <template v-slot:center>
          汽车品牌
        </template>
      </TopBar>
    </div>
    <div class="title">汽车品牌首字母大写</div>
    <div class="select">
      <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
    </van-dropdown-menu>
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
    <ul>
      <li v-for="item in data" :key="item.id" class="item">
        <img :src="item.brand_logo" alt=""><span>{{item.brand_name}}</span>
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
  data(){
    return {
      data:false,
      value1: 0,
       option1: [
        { text: "A", value: 0 },
        { text: "B", value: 1 },
        { text: "C", value: 2 },
        { text: "D", value: 3 },
        { text: "E", value: 4 },
        { text: "F", value: 5 },
        { text: "G", value: 6 },
        { text: "H", value: 7 },
        { text: "I", value: 8 },
        { text: "J", value: 9 },
        { text: "K", value: 10 },
        { text: "L", value: 11 },
        { text: "M", value: 12 },
        { text: "N", value: 13 },
        { text: "O", value: 14 },
        { text: "P", value: 15 },
        { text: "Q", value: 16 },
        { text: "R", value: 17 },
        { text: "S", value: 18 },
        { text: "T", value: 19 },
        { text: "U", value: 20 },
        { text: "V", value: 21 },
        { text: "W", value: 22 },
        { text: "X", value: 23 },
        { text: "Y", value: 24 },
        { text: "Z", value: 25 }
      ],
    }
  },
  methods:{
    search(){
      this.$http.get("/car?word="+this.option1[this.value1].text)
      .then(res =>{
        this.data = res.data;
        console.log( this.data);
      })
    }
  }
};
</script>

<style lang="less" scoped>
.car{
  background-color: #07c160;
}
.top {
  position: sticky;
  top: 0;
  z-index: 9;
}
img{
  margin-right: 50px;
  vertical-align:middle;
}
.title {
  display: flex;
  justify-content: center;
}
.btn,.item{
  margin: 10px;
}
.select{
  margin: 10px;
}
</style>
