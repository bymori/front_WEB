/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:12:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:22:43
 */
import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set('topList', action.topList);
    default:
      return state;
  }
}

export default reducer;
