<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 21:55:39
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 22:01:49
-->
<template>
  <div>
    <button @click="increment">{{counter}}</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue'
export default {
  setup () {
    const counter = ref(0);
    const increment = () => counter.value++

    onMounted(() => {
      console.log('app onMounted1');
    })
    onMounted(() => {
      console.log('app onMounted2');
    })
    onUpdated(() => {
      console.log('app onUpdated');
    })
    onUnmounted(() => {
      console.log('app onUnmounted');
    })
    return {
      counter,
      increment
    }
  }
}
</script>

<style scoped>
</style>