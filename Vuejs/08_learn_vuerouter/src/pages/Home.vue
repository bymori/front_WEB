<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 11:34:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 14:21:21
-->
<template>
  <div>
    <h2>Home</h2>
    <ul>
        <li>Home的内容1</li>
        <li>Home的内容2</li>
        <li>Home的内容3</li>
    </ul>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>

    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>