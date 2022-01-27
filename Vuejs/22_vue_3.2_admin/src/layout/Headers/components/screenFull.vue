<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 16:01:22
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 21:12:49
-->
<template>
  <div id="screenFull" @click="handleFullScreen">
    <svg-icon :icon="icon ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'

const icon = ref(screenfull.isFullscreen)

const handleFullScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}

const changeIcon = () => {
  icon.value = screenfull.isFullscreen
}

onMounted(() => {
  screenfull.on('change', changeIcon)
})

onBeforeMount(() => {
  screenfull.off('change')
})
// todo F11 全屏处理
</script>

<style lang="scss" scoped>
</style>
