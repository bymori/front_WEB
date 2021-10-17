<!--
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 16:59:17
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 17:12:08
-->
<template>
  <div id="nav">
    <router-link to="/"> Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>

  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
