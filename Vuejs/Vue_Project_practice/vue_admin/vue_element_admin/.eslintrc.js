/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 21:18:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 21:57:20
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0
  }
}
