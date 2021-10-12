<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 15:54:29
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 16:29:25
-->
<template>
  <div>
    <nav-bar :name=name>
      <!-- 具名插槽使用的时候缩写 # -->
      <template #left>
        <button>左边的按钮</button>
      </template>
      <template v-slot:center>
        <h2>中间的标题</h2>
      </template>
      <template v-slot:right>
        <i>右边的i元素</i>
      </template>
      <!-- 动态插槽名 -->
      <template v-slot:[name]>
        <i>动态插槽名</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      name: 'ioinn'
    }
  },
}
</script>

<style scoped>
</style>