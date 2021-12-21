/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 18:43:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 19:03:32
 */
import { combineReducers } from 'redux';

import { reducer as recommendReducer } from 'c-pages/recommend/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
});

export default cReducer;
