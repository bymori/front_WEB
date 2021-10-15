<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 10:21:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 11:49:38
-->
<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <br>
    <router-link to="/about">关于</router-link>

    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>