<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 17:00:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 17:04:50
-->
<template>
  <div>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup () {
    const router = useRouter();

    const loginClick = () => {

      window.localStorage.setItem("token", "ioinn")

      router.push({
        path: "/home"
      })
    }

    return {
      loginClick
    }
  }
}
</script>


<style scoped>
</style>