/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 16:08:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-07 18:50:22
 */
import { createStore, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import reducer from './reducer.js';

// 应用一些中间件
// 1.引入thunkMiddleware中间件(上面)

const storeEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, storeEnhancer);

export default store;
