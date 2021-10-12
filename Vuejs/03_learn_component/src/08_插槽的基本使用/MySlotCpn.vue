<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 15:40:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 15:53:15
-->
<template>
  <div>
    <h2>组件开始</h2>
    <slot>
      <i>这里是默认显示的i元素</i>
    </slot>
    <slot>
      <i>这里是默认显示的i元素</i>
    </slot>
    <slot>
      <i>这里是默认显示的i元素</i>
    </slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>