/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-21 14:51:06
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-22 15:21:02
 */
import React, { memo } from 'react';

import IOTopBanner from './c-cpns/top-banner';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style';

function IORecommend() {
  return (
    <RecommendWrapper>
      <IOTopBanner />
      <h2>IORecommend:</h2>
    </RecommendWrapper>
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
