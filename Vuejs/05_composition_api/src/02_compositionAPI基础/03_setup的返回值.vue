<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 16:06:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 16:27:40
-->
<template>
  <div>
    Home Page
    <h2>{{message}}</h2>

    <h2>{{title}}</h2>
    <h2>当前计数: {{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      counter: 100
    }
  },
  setup () {
    let counter = 100;

    // 局部函数
    const increment = () => {
      counter++;
      console.log(counter);
    }
    return {
      title: "Hello Home",
      counter,
      increment
    }
  },
  methods: {
    btnClick () {
      this.$emit("")
    }
  }
}
</script>

<style scoped>
</style>