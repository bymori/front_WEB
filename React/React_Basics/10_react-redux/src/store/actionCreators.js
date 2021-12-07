/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 16:39:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-07 11:29:43
 */
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
} from './constants.js';

// 其他引用导入方式
// import * as actionTypes from './constants.js';
// export const addAction = (num) => ({
//   type: actionTypes.ADD_NUMBER,
//   num,
// });

// export function addAction(num) {
//   return {
//     type: ADD_NUMBER,
//     num,
//   };
// }

// export const addAction = (num) => {
//   return {
//     type: ADD_NUMBER,
//     num,
//   };
// };

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

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends,
});
