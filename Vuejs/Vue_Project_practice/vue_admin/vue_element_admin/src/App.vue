<!--
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 23:22:08
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  }
}
</script>

<style lang="less">
#app {
  height: 100vh;
}
</style>
