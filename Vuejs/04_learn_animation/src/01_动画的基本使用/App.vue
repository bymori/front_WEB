<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-12 23:58:23
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 01:15:38
-->
<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">{{isShowBtn}}</button>
    </div>

    <transition name="ioh2"
                mode="out-in"
                appear>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>

  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
export default {
  components: {
    Home,
    About
  },
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
  margin: 0 auto;
}
.title {
  display: inline-block;
}
/* .ioh2-enter-active,
.ioh2-leave-active {
  animation: bounce 1s ease;
} */
.ioh2-enter-from,
.ioh2-leave-to {
  opacity: 0;
}
.ioh2-enter-active,
.ioh2-leave-active {
  transition: opacity 1s ease;
}
.ioh2-enter-active {
  animation: bounce 1s ease;
}

.ioh2-leave-active {
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>