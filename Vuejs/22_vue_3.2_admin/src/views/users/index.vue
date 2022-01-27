<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 22:53:46
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 22:48:30
-->
<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input v-model="queryForm.query" :placeholder="$t(`table.placeholder`)"></el-input>
      </el-col>
      <el-button type="primary" :icon="Search">{{ $t(`table.search`) }}</el-button>
      <el-button type="primary">{{ $t(`table.adduser`) }}</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        :width="item.width"
        :prop="item.prop"
        :label="$t(`table.${item.label}`)"
        v-for="(item, index) in options"
        :key="index"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state"></el-switch>
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          <!-- <el-switch v-model="row.mg_state"></el-switch> -->
          {{$filters.filterTimes(row.create_time)}}
        </template>
        <template #default v-else-if="item.prop === 'action'">
          <el-button type="primary" round size="small" :icon="Edit"></el-button>
          <el-button type="success" round size="small" :icon="Setting"></el-button>
          <el-button type="danger" round size="small" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'

import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'

import { getUsers } from '@/api/users'
import { options } from './options'

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2
})

const tableData = ref([])

const initGetUsersList = async () => {
  const res = await getUsers(queryForm.value)
  console.log(res)
  tableData.value = res.users
}

initGetUsersList()
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
</style>
