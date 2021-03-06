/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 18:41:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 17:15:50
 */
import React, { PureComponent } from 'react';

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

import {
  incAction,
  addAction,
  // changeBannersAction,
  // changeRecommendAction,
  // getHomeMultidataAction,
  fetchHomeMultidataAction,
} from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }

  render() {
    return (
      <div>
        <h1>Home5</h1>
        <h2>当前计数: {this.props.counter}</h2>
        <button onClick={(e) => this.props.incAction()}>+1</button>
        <button onClick={(e) => this.props.addAction(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => ({
  incAction: function () {
    dispatch(incAction());
  },
  addAction: function (num) {
    dispatch(addAction(num));
  },
  // changeBanners(banners) {
  //   dispatch(changeBannersAction(banners));
  // },
  // changeRecommends(recommends) {
  //   dispatch(changeRecommendAction(recommends));
  // },
  getHomeMultidata() {
    dispatch(fetchHomeMultidataAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
