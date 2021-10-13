<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 16:06:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 17:59:00
-->
<template>
  <div>
    Home Page
    <h2>{{message}}</h2>

    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包 -->
    <h2>当前计数: {{counter}}</h2>
    <button @click="increment">+1</button>

    <!-- ref的解包只能是一个浅层解包(info是一个普通的JavaScript对象) -->
    <h2>当前计数: {{info.counter.value}}</h2>

    <!-- 当如果最外层包裹的是一个reactive可响应式对象, 那么内部的ref可以解包 -->
    <h2>当前计数: {{reactiveInfo.counter}}</h2>

    <show-message :message="counter"></show-message>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup () {
    // counter编程一个ref的可响应式的引用
    // counter = 100;
    let counter = ref(100)

    const info = {
      counter
    }

    const reactiveInfo = reactive({
      counter
    })

    // 局部函数
    const increment = () => {
      counter.value++;
      console.log(counter.value);
    }
    return {
      counter,
      info,
      reactiveInfo,
      increment
    }
  },

}
</script>

<style scoped>
</style>