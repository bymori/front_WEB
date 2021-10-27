/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-27 20:00:36
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-27 22:25:28
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [0],
  },
};
