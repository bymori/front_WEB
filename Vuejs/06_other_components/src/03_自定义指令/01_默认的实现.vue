<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:21:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 12:27:36
-->
<template>
  <div>
    <input type="text"
           ref="input">
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/runtime-core'
export default {
  setup () {
    const input = ref(null)

    onMounted(() => {
      // console.log(input.value);
      input.value.focus()
    })
    return {
      input
    }

  }
}
</script>

<style scoped>
</style>