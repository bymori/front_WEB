<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:35:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 19:54:45
-->
<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
export default {
  setup () {
    // watchEffect: 自动收集响应式的依赖
    const name = ref("沫沫");
    const age = ref(18);

    const changeName = () => name.value = "末日"
    const changeAge = () => age.value++

    watchEffect(()=>{
    console.log("name:", name.value, "age:", age.value);
    })

    return {
      name,
      age,
      changeName,
      changeAge
    }
  }
}
</script>

<style scoped>
</style>