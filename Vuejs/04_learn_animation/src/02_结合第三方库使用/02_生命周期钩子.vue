<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 01:18:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 02:01:24
-->
<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">{{isShowBtn}}</button>
    </div>

    <transition @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
      <h2 class="title"
          v-if="isShow">Hello</h2>
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
  },
  methods: {
    beforeEnter () {
      console.log("beforeEnter");
    },
    enter () {
      console.log("enter");
    },
    afterEnter () {
      console.log("afterEnter");
    },
    beforeLeave () {
      console.log("beforeLeave");
    },
    leave () {
      console.log("leave");
    },
    afterLeave () {
      console.log("afterLeave");
    },
  },
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