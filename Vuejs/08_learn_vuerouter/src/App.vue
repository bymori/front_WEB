<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 10:21:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 14:10:36
-->
<template>
  <div id="app">
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to="/home"
                 active-class="io-active">首页</router-link>
    <router-link to="/about"
                 active-class="io-active">关于</router-link>
    <router-link to="/user/ioinn/id/111">用户</router-link>

    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.io-active {
  color: red;
}

.io-enter-from,
.io-leave-to {
  opacity: 0;
}

.io-enter-active,
.io-leave-active {
  transition: opacity 1s ease;
}
</style>