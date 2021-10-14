<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:21:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 16:42:22
-->
<template>
  <div>
    <h2 v-format-time="'YYYY年MM月DD日 HH:mm:ss'">{{timestamp}}</h2>
    <h2 v-format-time="'YYYY年MM月DD日 HH:mm:ss'">{{time}}</h2>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup () {
    const timestamp = 1634187858248

    const time = ref(0)

    function currentTime () {
      setInterval(formatDate, 1000);
    }
    function formatDate () {
      let date1 = new Date().getTime();
      time.value = date1;
    }
    onMounted(() => {
      currentTime()
    })
    return {
      timestamp, time
    }
  },
}
</script>

<style scoped>
</style>