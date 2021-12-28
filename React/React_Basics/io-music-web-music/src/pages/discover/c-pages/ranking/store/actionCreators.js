/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:11:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 17:01:29
 */
import * as actionTypes from './constants';

import { getTopList, getRankingList } from '@/services/ranking';

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list,
});

const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist,
});

export const changeCurrentIndex = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index,
});

export const getTops = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res));
      console.log(res);
    });
  };
};

export const getRanking = (id) => {
  return (dispatch) => {
    getRankingList(id).then((res) => {
      dispatch(changePlayListAction(res));
    });
  };
};
