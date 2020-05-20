<template>
  <div class="topbar">
    <van-row type="flex" justify="space-between">
      <van-col span="4" class="left">
          <slot name="left"></slot>
      </van-col>
      <van-col span="10" class="center">
          <slot name="center"></slot>
      </van-col>
      <van-col span="4">
          <slot name="right"></slot>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>

.topbar{
  margin-bottom: 20px;
  background-color: #eee;
  color: #07c160;
  font-weight: 700;
  padding: 0 10px;
  .left{
  display: flex;
  height: 44px;
  align-items: center;
}
.center{
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
}
}
</style>
