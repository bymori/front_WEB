/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 14:38:41
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 15:04:20
 */

import { getSongDetail } from '@/services/player';

import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]));
      console.log(res.songs);
    });
  };
};
