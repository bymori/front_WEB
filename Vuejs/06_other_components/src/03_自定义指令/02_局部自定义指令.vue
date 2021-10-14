<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:21:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 12:36:50
-->
<template>
  <div>
    <input type="text"
           v-focus>
  </div>
</template>

<script>

export default {
  // 局部指令
  directives: {
    focus: {
      mounted (el, bindings, vnode, preVnode) {
        console.log('focus mounted');
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
</style>