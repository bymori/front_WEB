/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-24 14:38:53
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-24 15:02:38
 */
import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [
    {
      name: '动物世界',
      id: 468517654,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5781,
          name: '薛之谦',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 39,
      crbt: null,
      cf: '',
      al: {
        id: 36855053,
        name: '渡',
        picUrl:
          'https://p1.music.126.net/fNbj5uDwltSDLbETdnEYYQ==/109951163069265719.jpg',
        tns: [],
        pic_str: '109951163069265719',
        pic: 109951163069265710,
      },
      dt: 230457,
      h: {
        br: 320000,
        fid: 0,
        size: 9221268,
        vd: -23900,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5532778,
        vd: -21300,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3688533,
        vd: -19800,
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 39,
      songJumpInfo: null,
      entertainmentTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      mv: 5521812,
      publishTime: 1490716800007,
    },
  ],
  currentSong: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    default:
      return state;
  }
}

export default reducer;
