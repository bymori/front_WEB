<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 15:02:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 15:20:17
-->
<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import { demoMixin } from "./mixins/demoMixin"
export default {
  mixins: [demoMixin],
  data () {
    return {
      title: 'hello',
      message: '组件内部的message'
    }
  },
  methods: {
    foo () {
      console.log('app foo');
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
    console.log("App created 执行");
  }
}
</script>

<style scoped>
</style>