/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 19:48:58
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 21:47:39
 */

// import { login } from '@/api/login'

export const submitForm = (formEl, form, store) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      // console.log('submit!')
      // console.log(form)
      store.dispatch('app/login', form)

      // const res = await login(form)
      // console.log(res)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

export const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
