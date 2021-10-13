<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 22:16:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 22:26:40
-->
<template>
  <div>
    <h2>{{name}}</h2>
    <h2>{{counter}}</h2>

    <button @click="homeIncrement">home+1</button>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core"
export default {
  setup () {
    const name = inject('name', '默认值')
    let counter = inject('counter')

    const homeIncrement = () => counter.value++

    return {
      name,
      counter,
      homeIncrement
    }

  }
}
</script>

<style scoped>
</style>