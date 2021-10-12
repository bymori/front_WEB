<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 16:52:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 17:26:31
-->
<template>
  <div>
    <template v-for="(item, index) in names"
              :key="index">
      <!-- <span>{{item}}</span> -->
      <!-- <slot name="ioinn" :item='item' -->
      <slot :item='item'
            :index='index'></slot>

      <slot>第二个插槽</slot>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    names: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
</style>