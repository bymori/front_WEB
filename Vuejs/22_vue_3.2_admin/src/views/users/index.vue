<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 22:53:46
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 23:04:44
-->
<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input v-model="queryForm.query" :placeholder="$t(`table.placeholder`)" clearable></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetUsersList">{{ $t(`table.search`) }}</el-button>
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

    <div class="demo-pagination-block">
      <el-pagination
        v-model:currentPage="currentPage4"
        :page-sizes="[2, 5, 10, 15]"
        :page-size="queryForm.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
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
  pagesize: 5
})

const total = ref(0)
const tableData = ref([])

const initGetUsersList = async () => {
  const res = await getUsers(queryForm.value)
  console.log(res)
  total.value = res.total
  tableData.value = res.users
}

initGetUsersList()

const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pageSize
  initGetUsersList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initGetUsersList()
}
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
::v-deep .el-input__suffix {
  align-items: center;
}
</style>
