/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-09 22:58:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 23:03:57
 */
import { CHANGE_BANNERS, CHANGE_RECOMMEND } from './constants.js';

const initialHomeState = {
  banners: [],
  recommends: [],
};
// 拆分 homeReducer
function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;
