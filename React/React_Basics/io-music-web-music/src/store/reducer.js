/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 18:43:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:21:49
 */
// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from 'c-pages/recommend/store';
import { reducer as playerReducer } from '../pages/player/store';
import { reducer as rankingReducer } from '../pages/discover/c-pages/ranking/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
});

export default cReducer;
