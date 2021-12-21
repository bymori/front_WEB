/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 14:51:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 20:20:15
 */
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';

import { getTopBannerAction } from './store/actionCreators';

function IORecommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  return (
    <div>
      <h2>IORecommend: {topBanners.length}</h2>
    </div>
  );
}

const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});

const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(IORecommend));
