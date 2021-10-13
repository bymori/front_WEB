<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 15:02:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 15:06:15
-->
<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin"
export default {
  mixins: [demoMixin]
}
</script>

<style scoped>
</style>