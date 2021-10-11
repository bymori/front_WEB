<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 23:33:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 00:14:40
-->
<template>
  <div>
    HomeContent {{name}} - {{age}} - {{length.value}}
  </div>
</template>

<script>
export default {
  inject: ['name', 'age', 'length']
}
</script>

<style scoped>
</style>