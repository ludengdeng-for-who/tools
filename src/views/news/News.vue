<template>
  <div>
   <div class="top">
     
      <TopBar>
      <template v-slot:left>
        <div @click="goBack">
          <van-icon name="arrow-left" />
        </div>
      </template>
      <template v-slot:center>
        每日新闻
      </template>
    </TopBar>
   </div>
      <a href="" name="top"></a>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="头条" name="1">
        <div v-for="item in data1" :key="item.uniquekey">
          <Item :item="item" />
        </div>
      </van-collapse-item>
      <van-collapse-item title="社会" name="2">
        <div v-for="item in data2.data" :key="item.uniquekey">
          <Item :item="item" />
        </div>
      </van-collapse-item>
      <van-collapse-item title="国内" name="3">
        <div v-for="item in data3.data" :key="item.uniquekey">
          <Item :item="item" />
        </div>
      </van-collapse-item>
      <van-collapse-item title="国际" name="4">
        <div v-for="item in data4.data" :key="item.uniquekey">
          <Item :item="item" />
        </div>
      </van-collapse-item>
    </van-collapse>
     <a href="#top" class="backtop">
       <van-icon name="arrow-up" />
     </a>
  </div>
</template>

<script>
import Item from "./components/NewsItem"
import TopBar from "@/components/TopBar";
export default {
  components: {
    TopBar,
    Item
  },
  data(){
      return {
           activeName: '0',
           data1:[],
           data2:[],
           data3:[],
           data4:[]
      }
  },
  created(){
      this.fech();
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    fech(){
       this.$http.get("/news")
       .then(res=>{
         console.log(res.data);
         this.data1 = res.data.result1;
         this.data2 = res.data.result2;
         this.data3 = res.data.result3;
         this.data4 = res.data.result4;
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
.backtop{
  font-size: 20px;
  position: fixed;
  right: 20px;
  bottom: 4px;
  background-color: #fff;
}
</style>
