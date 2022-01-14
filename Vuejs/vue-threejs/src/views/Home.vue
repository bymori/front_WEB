<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-14 22:16:21
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-14 22:40:04
-->

<script setup>
import * as api from '../api/index';
import { onMounted } from 'vue';

onMounted(async ()=>{
    let result=await api.getHomepage()
    console.log(result);
})

</script>

<template>
  <h1>Home 页面</h1>
</template>

<style lang="less" scoped>

</style>