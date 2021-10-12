<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 21:38:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 22:41:20
-->
<template>
  <div>
    <button @click="isShow=!isShow">切换</button>
    <template v-if="isShow">
      <home></home>
    </template>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  components: {
    Home
  },
  data () {
    return {
      isShow: true
    }
  },
}
</script>

<style scoped>
</style>