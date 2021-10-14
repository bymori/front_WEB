<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-14 15:11:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 15:27:33
-->
<template>
  <div class="app">
    <teleport to="#ioinn">
      <h2>当前计数</h2>
      <button>+1</button>
      <hello-world></hello-world>
    </teleport>

    <teleport to="#ioinn">
      <h2>第二个teleport #ioinn</h2>
    </teleport>

  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
import HelloWorld from './HelloWorld.vue';
export default {
  components: {
    HelloWorld
  },
  setup () {
    const instance = getCurrentInstance();
    console.log('setup', instance.appContext.config.globalProperties.$name);
  },
  mounted () {
    console.log('mounted', this.$name);
  },
  methods: {
    foo () {
      console.log('methods', this.$name);
    }
  },
}
</script>

<style scoped>
</style>