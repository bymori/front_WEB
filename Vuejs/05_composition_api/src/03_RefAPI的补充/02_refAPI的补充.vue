<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:08:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 19:17:18
-->
<template>
  <div>
    <h2>{{info}}</h2>
    <button @click="changeInfo">修改Info</button>
  </div>
</template>

<script>
import { ref, shallowRef, triggerRef } from 'vue';
export default {
  setup () {
    const info = shallowRef({ name: "ioinn" })

    const changeInfo = () => {
      info.value.name = "沫沫";
      //手动触发
      triggerRef(info);
    }

    return {
      info,
      changeInfo
    }
  }
}
</script>

<style scoped>
</style>