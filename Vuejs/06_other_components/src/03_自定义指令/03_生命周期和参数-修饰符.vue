<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 01:21:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 12:56:54
-->
<template>
  <div>
    <button v-if="counter < 5"
            v-io.aa.bb="'red'"
            @click="increment">当前计数: {{counter}}</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // 局部指令
  directives: {
    io: {
      created (el, bindings, vnode, preVnode) {
        console.log("created", el, bindings, vnode, preVnode);
        console.log(bindings.value);
        console.log(bindings.modifiers);

        if (bindings.modifiers.aa) {
          console.log('aa修饰符加上了');
        }
      },
      beforeMount (el, binding, vnode) {
        el.style.background = binding.value
        console.log("beforeMount");
      },
      mounted () {
        console.log("mounted");
      },
      beforeUpdate () {
        console.log("beforeUpdate");
      },
      updated () {
        console.log("updated");
      },
      beforeUnmount () {
        console.log("beforeUnmount");
      },
      unmounted () {
        console.log("unmounted");
      }
    },

  },
  setup () {
    const counter = ref(0);
    const increment = () => counter.value++;

    return {
      counter,
      increment
    }
  }
}
</script>

<style scoped>
</style>