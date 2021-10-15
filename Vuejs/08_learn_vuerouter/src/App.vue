<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-15 10:21:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 15:02:12
-->
<template>
  <div id="app">
    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to="/home"
                 active-class="io-active">首页</router-link>
    <router-link to="/about"
                 active-class="io-active">关于</router-link>
    <router-link to="/user/ioinn/id/111">用户</router-link>

    <button @click="jumpToAbout">关于</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "app",
  methods: {
    // this.$router
    // jumpToAbout () {
    //   this.$router.push('/about')
    // }
  },
  setup () {
    const router = useRouter()
    const jumpToAbout = () => {
      // router.push('/about')
      router.push({
        path: '/about',
        query: {
          name: 'ioinn',
          age: 19
        }
      })
      // router.replace('/about')
    }

    const forwardOneStep = () => {
      router.go(1)
      // router.go(-1)
      // router.forward()
      // router.back()
    }
    return {
      jumpToAbout,
      forwardOneStep
    }
  }
}
</script>

<style scoped>
.io-active {
  color: red;
}

.io-enter-from,
.io-leave-to {
  opacity: 0;
}

.io-enter-active,
.io-leave-active {
  transition: opacity 1s ease;
}
</style>