<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:08:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 19:30:47
-->
<template>
  <div>
    <input v-model="message" />
    <h2>{{message}}</h2>
  </div>
</template>

<script>
import debounceRef from './hook/useDebounceRef';
export default {
  setup () {
    const message = debounceRef("Hello World");

    return {
      message
    }
  }
}
</script>

<style scoped>
</style>