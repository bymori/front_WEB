<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 23:33:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 01:36:10
-->
<template>
  <div>
    HomeContent<br>
    <button @click="CancelAll">取消所有emitter</button><br>
  </div>
</template>

<script>
import emitter from "./utils/eventbus"
export default {
  created () {
    emitter.on('ioinn', (info) => {
      console.log('ioinn:', info);
    })
    emitter.on('momo', (info) => {
      console.log('momo:', info);
    })

    emitter.on('*', (type, info) => {
      console.log('* listenr:', type, info);
    })
  },
  methods: {
    CancelAll () {
      //取消 emitter 中所有的监听
      emitter.all.clear()
    },
  },
}
</script>

<style scoped>
</style>