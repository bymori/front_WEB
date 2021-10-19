<!--
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 23:55:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-20 00:16:13
-->
<template>
  <el-row class="home" :getter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userinfo">
            <p class="name ">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-10-20</span></p>
          <p>上次登录地点：<span>南昌</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">16</el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      userImg: require('../../assets/images/user.png')
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/assets/less/home';
</style>
