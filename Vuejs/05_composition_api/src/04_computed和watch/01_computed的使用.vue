<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 19:35:10
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 19:42:46
-->
<template>
  <div>
    <h2>{{fullName}}</h2>
    <button @click="changeName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup () {
    const firstName = ref("末");
    const lastName = ref("日");

    // 1.用法一: 传入一个getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => firstName.value + " " + lastName.value);

    // 2.用法二: 传入一个对象, 对象包含getter/setter
    const fullName = computed({
      get: () => firstName.value + " " + lastName.value,
      set (newValue) {
        const names = newValue.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      }
    });

    const changeName = () => {
      //   firstName.value = "ioinn"
      fullName.value = "六 道";
    }
    return {
      fullName,
      changeName
    }
  }
}
</script>

<style scoped>
</style>