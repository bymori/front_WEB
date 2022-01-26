/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-26 19:48:58
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-26 19:48:58
 */
export const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
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
