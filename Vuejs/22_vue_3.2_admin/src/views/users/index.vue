<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 22:53:46
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-28 21:30:15
-->
<template>
  <el-card>
    <!-- 搜索查询相关 -->
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input v-model="queryForm.query" :placeholder="$t(`table.placeholder`)" clearable></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetUsersList">{{ $t(`table.search`) }}</el-button>
      <el-button type="primary" @click="handleDialogVisible()">{{ $t(`table.adduser`) }}</el-button>
    </el-row>

    <!-- Form 表单 -->
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        :width="item.width"
        :prop="item.prop"
        :label="$t(`table.${item.label}`)"
        v-for="(item, index) in options"
        :key="index"
      >
        <template v-slot="{ row }" v-if="item.prop === 'mg_state'">
          <el-switch v-model="row.mg_state" @change="changeState(row)"></el-switch>
        </template>
        <template v-slot="{ row }" v-else-if="item.prop === 'create_time'">
          <!-- <el-switch v-model="row.mg_state"></el-switch> -->
          {{$filters.filterTimes(row.create_time)}}
        </template>
        <template #default="{row}" v-else-if="item.prop === 'action'">
          <el-button
            type="primary"
            round
            size="small"
            :icon="Edit"
            @click="handleDialogVisible(row)"
          ></el-button>
          <el-button type="success" round size="small" :icon="Setting"></el-button>
          <el-button type="danger" round size="small" :icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
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
  <Dialog
    v-model="dialogVisible"
    :dialogTitle="dialogTitle"
    v-if="dialogVisible"
    @initUserList="initGetUsersList()"
    :dialogTabValue="dialogTabValue"
  />
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'

import { getUsers, changeUserState } from '@/api/users'
import { options } from './options'
import { useI18n } from 'vue-i18n'

import { isNull } from '@/utils/filters'

import Dialog from './components/dialog.vue'

const i18n = useI18n()

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 5
})

const total = ref(0)
const tableData = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogTabValue = ref({})

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

const changeState = async (info) => {
  await changeUserState(info.id, info.mg_state)

  ElMessage({
    // message: res.meta.msg,
    message: i18n.t('message.updeteSuccess'),
    type: 'success'
  })
  // √ todo 设置后提示是否成功 弹出框
}

const handleDialogVisible = (row) => {
  if (isNull(row)) {
    dialogTitle.value = '添加用户'
    dialogTabValue.value = {}
  } else {
    dialogTitle.value = '编辑用户'
    dialogTabValue.value = JSON.parse(JSON.stringify(row))
  }

  dialogVisible.value = true
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

::v-deep .demo-pagination-block {
  padding-top: 16px;
}
</style>
