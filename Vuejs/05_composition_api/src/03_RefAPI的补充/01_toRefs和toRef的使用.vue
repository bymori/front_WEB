<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 18:39:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 18:54:47
-->
<template>
  <div>
    <h2>{{name}}-{{age}}</h2>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
  setup (props) {
    const info = reactive({ name: 'ioinn', age: 19 })

    // 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立链接
    // let { name, age } = toRefs(info)

    // 2.toRef: 对其中一个属性进行转换ref, 建立链接
    let { name } = info;
    let age = toRef(info, "age");

    const changeAge = () => {
      age.value++;
    }

    return {
      name, age, changeAge
    }
  }
}
</script>

<style scoped>
</style>