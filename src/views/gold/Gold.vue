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
          黄金数据
        </template>
      </TopBar>
    </div>
    <div class="btn" @click="search">
      <van-button type="default" size="large">查询</van-button>
    </div>
     <table class="api_table">
      <tbody v-if="data">
        <tr>
          <td>latestpri</td>
          <td>{{data[0][1].latestpri}}</td>
          <td>{{data[0][2].latestpri}}</td>
          <td>{{data[0][3].latestpri}}</td>
          <td>{{data[0][4].latestpri}}</td>
        </tr>
        <tr>
          <td >limit</td>
          <td>{{data[0][1].limit}}</td>
          <td>{{data[0][2].limit}}</td>
          <td>{{data[0][3].limit}}</td>
          <td>{{data[0][4].limit}}</td>
        </tr>
        <tr>
          <td >maxpri</td>
          <td>{{data[0][1].maxpri}}</td>
          <td>{{data[0][2].maxpri}}</td>
          <td>{{data[0][3].maxpri}}</td>
          <td>{{data[0][4].maxpri}}</td>
        </tr>
        <tr>
          <td >minpri</td>
          <td>{{data[0][1].minpri}}</td>
          <td>{{data[0][2].minpri}}</td>
          <td>{{data[0][3].minpri}}</td>
          <td>{{data[0][4].minpri}}</td>
        </tr>
        <tr>
          <td >openpri</td>
          <td>{{data[0][1].openpri}}</td>
          <td>{{data[0][2].openpri}}</td>
          <td>{{data[0][3].openpri}}</td>
          <td>{{data[0][4].openpri}}</td>
        </tr>
        <tr>
          <td >latestpri</td>
          <td>{{data[0][1].latestpri}}</td>
          <td>{{data[0][2].latestpri}}</td>
          <td>{{data[0][3].latestpri}}</td>
          <td>{{data[0][4].latestpri}}</td>
        </tr>
        <tr>
          <td >totalvol</td>
          <td>{{data[0][1].totalvol}}</td>
          <td>{{data[0][2].totalvol}}</td>
          <td>{{data[0][3].totalvol}}</td>
          <td>{{data[0][4].totalvol}}</td>
        </tr>
        <tr>
          <td >variety</td>
          <td>{{data[0][1].variety}}</td>
          <td>{{data[0][2].variety}}</td>
          <td>{{data[0][3].variety}}</td>
          <td>{{data[0][4].variety}}</td>
        </tr>
        <tr>
          <td>yespri</td>
          <td>{{data[0][1].yespri}}</td>
          <td>{{data[0][2].yespri}}</td>
          <td>{{data[0][3].yespri}}</td>
          <td>{{data[0][4].yespri}}</td>
        </tr>
        <tr>
          <td>latestpri</td>
          <td>{{data[0][1].latestpri}}</td>
          <td>{{data[0][2].latestpri}}</td>
          <td>{{data[0][3].latestpri}}</td>
          <td>{{data[0][4].latestpri}}</td>
        </tr>
        <tr>
          <td>latestpri</td>
          <td>{{data[0][1].latestpri}}</td>
          <td>{{data[0][2].latestpri}}</td>
          <td>{{data[0][3].latestpri}}</td>
          <td>{{data[0][4].latestpri}}</td>
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
  methods:{
    search(){
      this.$http.get("/gold")
      .then(res => {
        this.data = res.data;
        console.log(this.data);
      })
    }
  }
}
</script>

<style lang="less" scoped>
.btn{
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
  }
</style>