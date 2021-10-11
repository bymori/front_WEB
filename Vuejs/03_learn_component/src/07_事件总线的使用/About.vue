<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 00:58:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 01:11:05
-->
<template>
  <div>
    About
    <button @click="btnClick">About按钮</button>
  </div>
</template>

<script>
import emitter from "./utils/eventbus";
export default {
  methods: {
    btnClick () {
      console.log('About按钮点击了');
      emitter.emit('ioinn', { name: 'io小栈', age: 19 })
      emitter.emit('momo', { name: '沫沫', age: 19 })
    }
  },
}
</script>

<style scoped>
</style>