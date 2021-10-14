<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 15:11:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 15:16:54
-->
<template>
  <div class="app">
    <teleport to="#ioinn">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#ioinn">
      <h2>第二个teleport #ioinn</h2>
    </teleport>

  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue';
export default {
  components: {
    HelloWorld
  },
}
</script>

<style scoped>
</style>