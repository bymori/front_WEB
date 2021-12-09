/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-09 16:31:54
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 20:16:58
 */
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_HOME_MULTIDATA, ADD_NUMBER } from './constants';

import { changeBannersAction, changeRecommendAction } from './actionCreators';

function* fetchHomeMultidata(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata');

  const banners = res.data.data.banner.list;
  const recommends = res.data.data.recommend.list;

  //   yield put(changeBannersAction(banners));
  //   yield put(changeRecommendAction(recommends));

  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendAction(recommends)),
  ]);

  console.log(banners, recommends);
}

function* mySaga() {
  // takeLatest takeEvery 区别:
  // takeLatest: 一次只能监听一个对应的action 只会执行最后一个 前面的被覆盖
  // takeEvery: 每一个都会被执行

  yield all([
    takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
    // takeLatest(ADD_NUMBER, fetchHomeMultidata),
  ]);
}

export default mySaga;

// export default 生成器函数;
