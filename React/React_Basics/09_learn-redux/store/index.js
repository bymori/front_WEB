/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 16:08:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-06 16:35:29
 */
import redux from 'redux';

import reducer from './reducer.js';

const store = redux.createStore(reducer);

export default store;
