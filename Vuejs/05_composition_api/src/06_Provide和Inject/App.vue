<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 22:15:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 22:30:12
-->
<template>
  <div>
    <home />
    <br>
    <h2>App Counter: {{counter}}</h2>
    <button @click="increment">App中的+1</button>
  </div>
</template>

<script>
import { provide, ref, readonly } from "@vue/runtime-core"

import Home from './Home.vue'
export default {
  components: {
    Home
  },
  setup () {
    const name = ref('ioinn')
    let counter = ref(88)

    provide("name", readonly(name))
    provide("counter", readonly(counter))

    const increment = () => counter.value++;

    return {
      increment,
      counter
    }
  }
}
</script>

<style scoped>
</style>