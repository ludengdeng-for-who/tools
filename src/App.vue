<template>
  <div id="app">
    
    <transition mode="out-in" name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter,.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(400px);
}
// .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//     transform: translateX(0);
// }
#app{
  width: 100vw;
  height: 100vh;
  color: #fff;
  background-color: #07c160;
}
</style>
