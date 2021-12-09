/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-09 22:58:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 23:00:31
 */
import axios from 'axios';

import {
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA,
} from './constants.js';

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends,
});

// redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch) => {
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendAction(data.recommend.list));
  });
};

// redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA,
};
