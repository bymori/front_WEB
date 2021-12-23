/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 18:51:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-23 13:41:35
 */
import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbums', action.newAlbums);
    default:
      return state;
  }
}

export default reducer;
