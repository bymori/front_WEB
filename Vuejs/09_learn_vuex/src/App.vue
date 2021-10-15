<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:04:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:26:42
-->
<template>
  <h2>App：{{$store.state.counter}}</h2>
  <home />
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import Home from "./pages/Home.vue"
export default {
  name: 'App',
  components: {
    Home
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
  },
}
</script>

<style>
</style>
