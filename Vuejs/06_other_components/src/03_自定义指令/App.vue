<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:21:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 13:21:10
-->
<template>
  <div>
    <h2 v-format-time="'YYYY年MM月DD日 HH:mm:ss'">{{timestamp}}</h2>
  </div>
</template>

<script>

export default {
  setup () {
    const timestamp = 1634187858248

    return {
      timestamp
    }
  }
}
</script>

<style scoped>
</style>