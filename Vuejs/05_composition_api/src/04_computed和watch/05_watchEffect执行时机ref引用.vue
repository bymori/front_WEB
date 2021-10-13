<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:35:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 20:26:52
-->
<template>
  <div>
    <h2 ref="title">哈哈嘿嘿</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup () {
    const title = ref(null)

    watchEffect(() => {
      console.log(title.value);
    }, {
      flush: "post"
    })

    return {
      title
    }
  }
}
</script>

<style scoped>
</style>