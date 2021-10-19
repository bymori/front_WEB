<!--
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 23:53:02
-->
<template>
  <el-container style="width:100%">
    <el-aside width="auto">
      <CommonAsideVue></CommonAsideVue>
    </el-aside>
    <el-container>
      <el-header>
        <CommonHeaderVue></CommonHeaderVue>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CommonAsideVue from '@/components/CommonAside.vue'
import CommonHeaderVue from '@/components/CommonHeader.vue'

export default {
  name: 'Main',
  components: {
    CommonAsideVue, CommonHeaderVue
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background: #333;
}
.el-main {
  padding-top: 0;
}
.el-aside {
  height: 100vh;
}
</style>
