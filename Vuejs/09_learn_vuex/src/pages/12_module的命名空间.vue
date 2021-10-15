<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 00:18:04
-->
<template>
  <div>
    <h2>root:{{ $store.state.rootCounter }}</h2>
    <h2>home:{{ $store.state.home.homeCounter }}</h2>
    <h2>user:{{ $store.state.user.userCounter }}</h2>

    <hr>
    <!-- <h2>{{ $store.getters.doubleHomeCounter }}</h2> -->
    <h2>{{ $store.getters["home/doubleHomeCounter"] }}</h2>

    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">home+1</button>
  </div>
</template>

<script>

export default {
  methods: {
    homeIncrement () {
      this.$store.commit("home/increment")
    },
    homeIncrementAction () {
      this.$store.dispatch("home/incrementAction")
    }
  }
}
</script>

<style scoped>
</style>