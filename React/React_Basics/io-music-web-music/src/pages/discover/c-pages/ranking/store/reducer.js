/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:12:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 17:00:32
 */
import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
  topList: [],
  currentIndex: 0,
  playList: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_LIST:
      return state.set('topList', action.topList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', action.currentIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    default:
      return state;
  }
}

export default reducer;
