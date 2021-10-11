<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 20:00:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 20:17:08
-->
<template>
  <div class="main">
    <main-banner />
    <main-product-list />
  </div>
</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProductList from './MainProductList.vue'

export default {
  components: {
    MainBanner,
    MainProductList
  },
}
</script>

<style scoped>
</style>