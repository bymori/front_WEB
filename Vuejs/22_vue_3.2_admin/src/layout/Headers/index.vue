<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 12:17:10
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 17:21:41
-->
<template>
  <div class="navbar">
    <Hamburger />
    <Breadcrumb />
    <div class="navbar-right">
      <Driver class="navbar-item" />
      <screen-full class="navbar-item" />
      <Lang class="navbar-item" />
      <Avatar class="navbar-item" />
    </div>
  </div>
</template>
<script setup>
import Hamburger from './components/hamburger.vue'
import Breadcrumb from './components/breadcrumb.vue'
import Avatar from './components/avatar.vue'
import Lang from './components/lang.vue'
import ScreenFull from './components/screenFull.vue'
import Driver from './components/driver'
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  .navbar-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ::v-deep .navbar-item {
      display: inline-block;
      margin-left: 18px;
      font-size: 22px;
      color: #5a5e66;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
}
</style>
