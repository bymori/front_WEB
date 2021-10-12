<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 23:00:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-12 23:39:30
-->
<template>
  <div>
    <!-- <input v-model="msg">
    <br>
    <input :value="msg"
           @input="msg=$event.target.value"> -->

    <!-- 组件上使用  v-model-->
    <!-- <moinput v-model="msg"></moinput> -->
    <!-- <moinput :modelValue="msg"
             @updata:model-value="msg=$event"></moinput> -->

    <!-- 绑定多个 v-model-->
    <moinput v-model="msg"
             v-model:title="title"></moinput>
    <h2>{{msg}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import Moinput from "./Moinput.vue"
export default {
  components: {
    Moinput
  },
  data () {
    return {
      msg: 'hello ioinn',
      title: '嘿嘿'
    }
  },
}
</script>

<style scoped>
</style>