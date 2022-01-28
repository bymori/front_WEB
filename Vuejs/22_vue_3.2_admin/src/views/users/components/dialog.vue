<!--
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 23:47:57
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-28 21:50:59
-->
<template>
  <el-dialog :model-value="dialogVisible" :title="dialogTitle" width="40%" @close="handleClose">
    <el-form ref="formRef" :model="form" label-width="80px" :rules="rules">
      <el-form-item :label="$t(`dialog.username`)" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item :label="$t(`dialog.password`)" prop="password" v-if="dialogTitle === '添加用户'">
        <el-input v-model="form.password" type="password" show-password></el-input>
      </el-form-item>
      <el-form-item :label="$t(`dialog.email`)" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item :label="$t(`dialog.mobile`)" prop="mobile">
        <el-input v-model="form.mobile"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">{{ $t('dialog.cancel') }}</el-button>
        <el-button type="primary" @click="handleConfirm">{{ $t('dialog.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, defineEmits, defineProps, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { addUser, editUser } from '@/api/users'
import i18n from '@/i18n'

const props = defineProps({
  dialogTitle: {
    type: String,
    default: '',
    required: true
  },
  dialogTabValue: {
    type: Object,
    default: () => { }
  }
})

const formRef = ref(null)
const form = ref({
  username: '', password: '', email: '', mobile: ''
})
const rules = ref({
  username: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ],
  email: [
    {
      message: 'Please input Activity name',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    {
      // todo 手机号正则匹配 修复
      message: 'Please input Activity name',
      trigger: 'blur'
    }, {
      pattern: '/^(?:(?:\+|00)86)?1[3-9]\d{9}$/'
    }
  ]
})

watch(() => props.dialogTabValue, () => {
  console.log(props.dialogTabValue)
  form.value = props.dialogTabValue
}, { deep: true, immediate: true })

const emits = defineEmits(['update:modelValue', 'initUserList'])

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      props.dialogTitle === '添加用户' ? await addUser(form.value) : await editUser(form.value)

      ElMessage({
        message: i18n.global.t('message.updeteSuccess'),
        type: 'success'
      })
      emits('initUserList')
      handleClose()
    } else {
      console.log('error submit!!!')
      return false
    }
  })
}

</script>

<style lang="scss" scoped>
::v-deep .el-input__suffix {
  align-items: center;
}
</style>
