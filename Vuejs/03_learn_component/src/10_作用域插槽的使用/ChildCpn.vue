<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 16:39:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 16:47:15
-->
<template>
  <div>
    <h2>{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'hell Child Cpn'
    }
  },
}
</script>

<style scoped>
</style>