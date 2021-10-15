<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:04:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 18:32:22
-->
<template>
  <h2>{{$store.state.rootCounter}}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>

export default {
  name: 'App',
  components: {

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
