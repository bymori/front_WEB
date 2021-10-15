<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 00:01:11
-->
<template>
  <div>
    <h2>{{ $store.state.rootCounter }}</h2>
    <h2>{{ $store.state.home.homeCounter }}</h2>
    <h2>{{ $store.state.user.userCounter }}</h2>
  </div>
</template>

<script>

export default {
  setup () {

  }
}
</script>

<style scoped>
</style>