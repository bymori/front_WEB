<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 23:33:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 01:00:21
-->
<template>
  <div>
    <home></home>
    <about />
  </div>
</template>

<script>
import Home from "./Home.vue";
import About from "./About.vue";
export default {
  components: {
    Home,
    About,
  },

}
</script>

<style scoped>
</style>