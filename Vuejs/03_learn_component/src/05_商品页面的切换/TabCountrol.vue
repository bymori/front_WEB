<!--
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-11 22:31:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-11 22:55:16
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
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  },

}
</script>

<style scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item.active {
  color: red;
}
.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>