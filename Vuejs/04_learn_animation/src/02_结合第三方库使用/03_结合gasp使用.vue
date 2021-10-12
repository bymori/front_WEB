<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 01:18:55
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 02:10:20
-->
<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">{{isShowBtn}}</button>
    </div>

    <transition @enter="enter"
                @leave="leave" :css="false">
      <h2 class="title"
          v-if="isShow">Hello</h2>
    </transition>

  </div>
</template>

<script>
import gsap from "gsap";
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
    enter (el, done) {
      console.log("enter");
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
    },
    leave (el, done) {
      console.log("leave");
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done
      })
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