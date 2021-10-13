<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-13 13:30:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 14:51:31
-->
<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="ul"
                      name="io"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave"
                      :css="false">
      <li v-for="(item, index) in showNames"
          :key="index"
          :data-index='index'>
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from "gsap"
export default {
  data () {
    return {
      names: ['aa', 'bcf', 'cf', 'dnf', 'lol', 'qqt', 'momo', 'ioinn', 'cn', 'mori',],
      keyword: ''
    }
  },
  computed: {
    showNames () {
      return this.names.filter(item => item.indexOf(this.keyword) !== -1)
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.opacity = 0
      el.style.height = 0

    },
    enter (el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.5em',
        delay: el.dataset.index * 0.2,
        onComplete: done
      })
    },
    leave (el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.2,
        onComplete: done
      })
    }
  },
}
</script>

<style scoped>
/* .io-enter-from,
.io-leave-to {
  opacity: 0;
}

.io-enter-active,
.io-leave-active {
  transition: opacity 1s ease;
} */
</style>