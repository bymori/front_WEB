/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-09 22:58:22
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 23:03:09
 */
import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from './constants.js';

const initialCounterState = {
  counter: 0,
};

// 拆分 counterReducer
function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default counterReducer;
