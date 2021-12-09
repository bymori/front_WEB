/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-09 22:58:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 23:00:22
 */

import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants.js';

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const incAction = () => ({
  type: INCREMENT,
});

export const decAction = () => ({
  type: DECREMENT,
});
