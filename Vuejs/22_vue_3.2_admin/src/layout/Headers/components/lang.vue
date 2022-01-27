<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 14:59:36
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 15:59:50
-->
<template>
  <el-dropdown @command="handleCommand">
    <svg-icon icon="language"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'">中文</el-dropdown-item>
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'

const i18n = useI18n()
const store = useStore()

const currentLanguage = computed(() => {
  return i18n.locale.value
})

const handleCommand = (val) => {
  i18n.locale.value = val
  store.commit('app/changLang', val)
  localStorage.setItem('lang', val)
}

</script>

<style lang="scss" scoped>
</style>
