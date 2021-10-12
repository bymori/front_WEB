<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 21:02:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 21:21:44
-->
<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件和根组件</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是navBar中的msg属性'
    }
  },
  methods: {
    sayHello () {
      console.log('hello navbar');
    },
    getParentAndRoot () {
      // 访问父组件实例
      console.log(this.$parent);
      console.log(this.$parent.mm);
      // 调用父组件 btnClick 方法
      this.$parent.btnClick()

      // 访问根组件
      console.log(this.$root);
    }
  },
}
</script>

<style scoped>
</style>