<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 22:31:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 23:13:45
-->
<template>
  <div class="tab-control">
    <div class="tab-control-item"
         :class="{active:currentIndex===index}"
         @click="itemClick(index)"
         v-for="(item, index) in titles"
         :key="index">
      <span>
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['titleClick'],
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      // 判断index 是否为当前页面 
      if (index == this.currentIndex) return
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  },

}
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-control-item {
  flex: 1;
  text-align: center;
  color: #333;
  margin-top: 7px;
  font-size: 16px;
  font-weight: 700;
  line-height: 27px;
  height: 27px;
}
.tab-control-item.active {
  color: #fff;
}
.tab-control-item.active span {
  background: #e1251b;
  width: 70px;
  height: 27px;
  line-height: 27px;
  display: inline-block;
  border-radius: 50px;
}
</style>