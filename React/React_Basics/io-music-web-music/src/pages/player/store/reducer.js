/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 14:38:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-30 22:15:27
 */
import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [], // 存储歌单列表
  currentSongIndex: 0, // 当前第 * 条歌曲
  currentSong: {}, // 当前歌曲
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: [], // 歌词
  currentLyricIndex: 0, // 当前第*条歌词
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index);
    default:
      return state;
  }
}

export default reducer;
