<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 16:06:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 18:10:18
-->
<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";
export default {
  setup () {
    // 1.普通对象
    const info1 = { name: "沫沫" };
    const readonlyInfo1 = readonly(info1);

    // 2.响应式的对象reactive
    const info2 = reactive({
      name: "沫沫"
    })
    const readonlyInfo2 = readonly(info2);

    // 3.响应式的对象ref
    const info3 = ref("沫沫");
    const readonlyInfo3 = readonly(info3);


    const updateState = () => {
      readonlyInfo3.value = "ioinn"
      info3.value = "ioinn";
    }

    return {
      updateState,
    }
  },

}
</script>

<style scoped>
</style>