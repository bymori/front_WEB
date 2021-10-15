<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:38:35
-->
<template>
  <div>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <hr>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="addTen">+10</button>
    <hr>
  </div>
</template>

<script>
import { INCREMENT_N } from "../store/mutation-types"

export default {
  methods: {
    addTen () {
      //   this.$store.commit('incrementN', 10)
      //   this.$store.commit('incrementN', { n: 10, name: "ioinn", age: 18 })

      //提交风格
      this.$store.commit({
        type: INCREMENT_N,
        n: 10,
        name: "ioinn",
        age: 18
      })
    }
  },
}
</script>

<style scoped>
</style>