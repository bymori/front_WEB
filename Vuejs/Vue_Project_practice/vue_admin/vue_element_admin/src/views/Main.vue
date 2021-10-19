<!--
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 22:44:20
-->
<template>
  <el-container style="width:100%">
    <el-aside width="auto">
      <CommonAsideVue></CommonAsideVue>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CommonAsideVue from '@/components/CommonAside.vue'

export default {
  name: 'Main',
  components: {
    CommonAsideVue
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background: #000;
}
.el-main {
  padding-top: 0;
}
</style>
