<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 13:03:01
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 15:17:58
-->
<template>
  <el-dropdown class="textWidth">
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
    </span>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">{{ $t(`login.logout`) }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'

import { useStore } from 'vuex'
const store = useStore()

const squareUrl = ref(
  'https://cdn.jsdelivr.net/gh/bymori/image-PicX@main/img/uq0qn8nl7d-1636103048841.png'
)

const logout = () => {
  store.dispatch('app/logout')
}

</script>

<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}

.textWidth {
  width: 51px;
}
</style>
