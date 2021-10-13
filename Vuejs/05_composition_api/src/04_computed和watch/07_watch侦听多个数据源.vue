<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:35:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 21:17:56
-->
<template>
  <div>
    <h2 ref="title">{{info.name}}--{{info.age}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup () {
    // 1.定义可响应式的对象
    const info = reactive({ name: "ioinn", age: 18 });
    const name = ref("沫沫");

    // 2.侦听器watch
    watch([() => ({ ...info }), name], ([newVInfo, newNAme], [oldInfo, oldNAme]) => {
      console.log('newVInfo:', newVInfo);
      console.log('oldInfo:', oldInfo);
      console.log('newNAme:', newNAme,);
      console.log('oldNAme:', oldNAme);
    })

    const changeData = () => {
      info.name = "末日";
      name.value = '六道'
    }
    return {
      changeData,
      info
    }
  }
}
</script>

<style scoped>
</style>