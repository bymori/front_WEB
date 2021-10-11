<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-10 23:43:43
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 10:03:12
-->
<template>
  <input type="text">
  <h2>这里是Vue渲染出来的-{{msg}}</h2>
  <hello-world></hello-world>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
export default {
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'hello vuehaha',
    };
  },
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>