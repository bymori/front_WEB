<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 23:58:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 00:15:36
-->
<template>
  <div>
    <button @click="isShow = !isShow">{{isShowBtn}}</button>

    <transition name="ioh2">
      <h2 v-if="isShow">hello</h2>
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
.ioh2-enter-from,
.ioh2-leave-to {
  opacity: 0;
}
.ioh2-enter-to,
.ioh2-leave-from {
  opacity: 1;
}
.ioh2-enter-active,
.ioh2-leave-active {
  transition: opacity 1s ease;
}
</style>