<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 20:23:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 20:43:56
-->
<template>
  <h2 class="app">App</h2>
  <hello-world />
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: { HelloWorld },

}
</script>

<style scoped>
.app {
  color: red;
}
</style>