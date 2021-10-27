/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-28 00:43:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-28 00:47:38
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  global: {
    ServerData: true,
    Atomics: readonly,
    SharedArrayBuffer: readonly,
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [1],
  },
};
