/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 15:10:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-15 21:36:24
 */
import store from './store/index.js';

import {
  addAction,
  subAction,
  incAction,
  decAction,
} from './store/actionCreators.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addAction(10));
store.dispatch(addAction(15));
store.dispatch(subAction(8));
store.dispatch(subAction(5));
store.dispatch(incAction());
store.dispatch(decAction());

const initialState = {
  friends: [
    { name: 'Judah', age: 22 },
    { name: 'momo', age: 46 },
    { name: 'Ellsworth', age: 15 },
  ],
};
