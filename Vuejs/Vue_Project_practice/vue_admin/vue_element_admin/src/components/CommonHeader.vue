<!--
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 23:18:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 23:27:30
-->
<template>
  <header>
    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color:#fff">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      userImg: require('@/assets/images/user.png')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
