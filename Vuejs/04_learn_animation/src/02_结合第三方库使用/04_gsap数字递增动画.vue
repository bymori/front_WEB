<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 01:18:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 13:22:57
-->
<template>
  <div class="app">
    <input type="number"
           step="1000"
           v-model="counter">
    <h2>{{showCount}}</h2>
    <h2>{{showNumber.toFixed(0)}}</h2>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data () {
    return {
      counter: 0,
      showNumber: 0
    }
  },
  computed: {
    showCount () {
      return this.showNumber.toFixed(0)
    }
  },
  watch: {
    counter (newValue) {
      gsap.to(this, { duration: 2, showNumber: newValue })
    }
  }
}
</script>

<style scoped>
.app {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
.title {
  display: inline-block;
}
</style>