<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 22:28:09
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 22:39:26
-->
<template>
  <div>
    <h2 ref="title">{{msg}}</h2>
    <button @click="changeMsg">修改msg</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello ioinn'
    }
  },
  methods: {
    changeMsg () {
      this.msg = '你好a沫沫'
    }
  },
  beforeCreate () {
    console.log('home beforeCreate 创建之前');
  },
  created () {
    console.log('home created 已创建');
  },
  beforeMount () {
    console.log('home beforeMount 在加载之前');
  },
  mounted () {
    console.log('home mounted 已加载');
  },
  beforeUnmount () {
    console.log('home beforeUnmount 在卸载之前');
  },
  unmounted () {
    console.log('home unmounted 已卸载');
  },
  beforeUpdate () {
    console.log(this.$refs.title.innerHTML);
    console.log('home beforeUpdate 在更新之前');
  },
  updated () {
    console.log(this.$refs.title.innerHTML);
    console.log('home updated 已更新');
  },
}
</script>

<style lang="sass" scoped>
</style>