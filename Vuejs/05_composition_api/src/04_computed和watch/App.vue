<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:35:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 21:28:42
-->
<template>
  <div>
    <h2 ref="title">{{info.name}}--{{info.friend.name}}--{{info.friend.agee}}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
  setup () {
    // 1.定义可响应式的对象
    const info = reactive({
      name: "沫沫",
      age: 18,
      friend: {
        name: "末日",
        agee: 20
      }
    });

    // 2.侦听器watch
    watch(() => ({ ...info }), (newInfo, oldInfo) => {
      console.log(newInfo, oldInfo);
      console.log(newInfo.friend.agee);
      console.log(oldInfo.friend.agee);
    }, {
      deep: true,
      // immediate: true
    })

    const changeData = () => {
      // info.friend.name = "ioinn";
      info.friend.agee++
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