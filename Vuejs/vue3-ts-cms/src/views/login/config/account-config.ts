/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 20:01:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-18 20:58:12
 */
// 编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      // pattern: /^[a-z0-9]{3,}$/,
      pattern:
        /^\S*(?=\S{6,20})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
      message:
        '密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
      trigger: 'blur'
    }
  ]
}

// https://any86.github.io/any-rule/
