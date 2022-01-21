<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-21 14:27:16
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-21 14:52:23
-->
<script setup lang="ts">
import { useMainState } from '../store';

const mainStore=useMainState()

console.log(mainStore.count);

</script>

<template>
<h2>mainStore.count: {{mainStore.count}}</h2>
</template>

