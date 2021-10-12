<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 17:54:33
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 19:48:54
-->
<template>
  <div>
    Category
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name:'category',
  data () {
    return {
      counter: 0
    }
  },
}
</script>

<style scoped>
</style>