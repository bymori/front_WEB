/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 14:51:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 20:38:14
 */
import React, { memo, useEffect } from 'react';

import { getTopBannerAction } from './store/actionCreators';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

function IORecommend() {
  // 组件和redux关联： 获取数据和进行操作
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners,
  }));

  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>IORecommend:{topBanners.length}</h2>
    </div>
  );
}

export default memo(IORecommend);

// import { connect } from 'react-redux';

// function IORecommend(props) {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       <h2>IORecommend: {topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(IORecommend));
