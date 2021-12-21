/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 18:51:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 19:00:41
 */
import * as actionTypes from './constants';

const defaultState = {
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: [] };
    default:
      return state;
  }
}

export default reducer;
