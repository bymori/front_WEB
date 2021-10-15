<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 13:53:11
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 14:00:54
-->
<template>
  <div>
    <h2>User:{{$route.params.username}}-{{$route.params.id}} </h2>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  created () {
    console.log('created', this.$route.params.username);
  },
  setup () {
    const route = useRoute();
    console.log('setup', route.params.username);
  }
}
</script>

<style scoped>
</style>