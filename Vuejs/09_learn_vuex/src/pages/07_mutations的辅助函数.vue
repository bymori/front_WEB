<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 18:44:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:51:43
-->
<template>
  <div>
    <h2>当前计数：{{$store.state.counter}}</h2>
    <hr>
    <button @click="increment">+1</button>
    <button @click="add">+1+++</button>
    <button @click="decrement">-1</button>
    <button @click="increment_n({ n: 10 })">+10</button>
    <hr>
  </div>
</template>

<script>
import { mapMutations } from "vuex"
import { INCREMENT_N } from "../store/mutation-types"

export default {
  //   methods: {
  //     ...mapMutations(['increment', 'decrement', INCREMENT_N]),
  //     ...mapMutations({
  //       add: 'increment'
  //     }),
  //     // addTen () {
  //     //   this.increment_n({ n: 10 })
  //     // }
  //   },
  setup () {
    const storeMutations = mapMutations(['increment', 'decrement', INCREMENT_N])

    const storeMutationsObj = mapMutations({
      add: 'increment'
    })

    return {
      ...storeMutations,
      ...storeMutationsObj
    }
  }
}
</script>

<style scoped>
</style>