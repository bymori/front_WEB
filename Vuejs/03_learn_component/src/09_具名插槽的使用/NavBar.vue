<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 15:55:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 16:21:10
-->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

    <!-- 动态插槽名 -->
    <div class="addition">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
  //   data () {
  //     return {
  //       name: 'ioinn'
  //     }
  //   },
}
</script>

<style scoped>
.nav-bar {
  display: flex;
}
.left,
.right,
.center {
  height: 44px;
}
.left,
.right,
addition {
  width: 80px;
  background-color: red;
}
.center {
  flex: 1;
  background-color: blue;
}
</style>