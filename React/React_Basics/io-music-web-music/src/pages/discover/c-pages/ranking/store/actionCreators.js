/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-28 16:11:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-28 16:23:30
 */
import * as actionTypes from './constants';

import { getTopList, getRankingList } from '@/services/ranking';

const changeTopListAction = (res) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list,
});

export const getTops = () => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(changeTopListAction(res));
      console.log(res);
    });
  };
};
