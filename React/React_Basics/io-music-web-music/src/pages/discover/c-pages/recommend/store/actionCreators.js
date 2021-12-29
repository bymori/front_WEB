/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 18:51:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-29 23:34:34
 */
import * as actionTypes from './constants';

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
} from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

// 对外暴露
export const changeHotRecommendsListAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND_LIST,
  hotRecommendsList: res.playlist.tracks,
});

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getTopListActions = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      dispatch(changeHotRecommendsListAction(res));
    });
  };
};

export const getNewAlbumAction = () => {
  return (dispatch) => {
    getNewAlbums().then((res) => {
      // const albums = res.albums;
      dispatch(changeNewAlbumAction(res));
    });
  };
};

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      switch (id) {
        case 19723756: // 飙升榜
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629: // 新歌榜
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035: // 原创榜
          dispatch(changeOriginRankingAction(res));
          break;
        default:
      }
    });
  };
};
