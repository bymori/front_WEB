<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 23:50:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 00:30:18
-->
<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+1</button>
    <hello-world-vue message="呵呵呵"
                     @increment="getCounter" />

    <h2><a href="https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineprops-%E5%92%8C-defineemits">defineProps 和 defineEmits</a></h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import HelloWorldVue from "./HelloWorld.vue"

const counter = ref(0)
const increment = () => counter.value++

const getCounter = (payload) => {
  console.log(payload);
}
</script>

<style scoped>
</style>