/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 16:35:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 23:09:12
 */
import { reducer as counterReducer } from './counter';
import { reducer as homeReducer } from './home';

import { combineReducers } from 'redux';

// function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action),
//   };
// }

//reducer应该是一个 function 类型?
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
});

export default reducer;
