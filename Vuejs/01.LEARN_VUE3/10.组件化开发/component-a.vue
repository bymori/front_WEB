<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-10 01:24:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-10 01:26:30
-->
<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{desc}}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '沫沫莫',
      desc: '这里是一段内容文字',
    };
  },
  methods: {
    btnClick () {
      console.log('被点击了一下o');
    },
  },
}
</script>

<style lang="less" scoped>
</style>