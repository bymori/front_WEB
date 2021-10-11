<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 20:57:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 21:00:08
-->
<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'content']
}
</script>

<style scoped>
</style>