<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 23:50:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 00:24:29
-->
<template>
  <div>
    <h2>Hello World</h2>
    <h2>{{message}}</h2>
    <button @click="emitEvent">发射事件</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  message: {
    type: String,
    default: "哈哈哈"
  }
})

const emit = defineEmits(['increment', 'decrement'])
//   const emit = defineEmit(["increment", "decrement"]);

const emitEvent = () => {
  emit('increment', "100000")
}
</script>

<style scoped>
</style>