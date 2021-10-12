<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 17:54:16
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 22:56:06
-->
<template>
  <div>
    About
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      counter: 0
    }
  },
  created () {
    console.log("About created 已创建");
  },
  unmounted () {
    console.log("About unmounted 已卸载");
  },
  activated () {
    console.log("About activated 已激活");
  },
  deactivated () {
    console.log("About deactivated 停用");
  },
}
</script>

<style scoped>
</style>