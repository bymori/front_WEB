<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 17:54:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 19:48:29
-->
<template>
  <div>
    About
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name:'about',
  data () {
    return {
      counter: 0
    }
  },
}
</script>

<style scoped>
</style>