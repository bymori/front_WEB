<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 22:12:26
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 12:33:57
-->
<template>
  <el-container class="app-wrapper">
    <el-aside :width="asideWidth" class="sidebar-container">
      <Menu />
    </el-aside>
    <el-container class="container" :class="{ hidderContainer: !$store.getters.siderType }">
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'

import Menu from './Menu'
import Header from './Headers'

import variables from '@/styles/variables.scss'

const store = useStore()

// const asideWidth = ref(variables.sideBarWidth)

const asideWidth = computed(() => {
  return store.getters.siderType
    ? variables.sideBarWidth
    : variables.hideSideBarWidth
})

</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
