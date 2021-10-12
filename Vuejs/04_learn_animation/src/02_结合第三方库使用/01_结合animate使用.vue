<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 01:18:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 01:43:43
-->
<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">{{isShowBtn}}</button>
    </div>

    <transition name="ioh2"
                enter-active-class="animate__animated animate__fadeInDown"
                leave-active-class="animate__animated animate__flipInY">
      <h2 v-if="isShow">Hello</h2>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    isShowBtn () {
      return (this.isShow) ? '点我隐藏' : '点我显示'
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
/* .ioh2-enter-active {
  animation: bounceInUp 1s ease;
}
.ioh2-leave-active {
  animation: bounceInUp 1s ease reverse;
} */

.animate__flipInY {
  animation-direction: reverse;
}
</style>