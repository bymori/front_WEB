/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-29 19:23:33
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-29 20:33:37
 */
import type { ElForm } from 'element-plus';

import { useLoginStore } from '@/store/login';

const useLogin = useLoginStore();

export const submitForm = (
  formEl: InstanceType<typeof ElForm> | undefined,
  form: {}
) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      useLogin.login(form);
      console.log('submit!');
    } else {
      console.log('error submit!');
      return false;
    }
  });
};
