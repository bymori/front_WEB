/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 18:41:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-07 11:34:17
 */
import React, { PureComponent } from 'react';

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

import axios from 'axios';

import {
  incAction,
  addAction,
  changeBannersAction,
  changeRecommendAction,
} from '../store/actionCreators';

class Home extends PureComponent {
  componentDidMount() {
    axios({
      url: 'http://123.207.32.32:8000/home/multidata',
    }).then((res) => {
      const data = res.data.data;
      // console.log('轮播图：', data.banner.list);
      // console.log('推荐：', data.recommend.list);
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    });
  }

  render() {
    return (
      <div>
        <h1>Home3</h1>
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
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommendAction(recommends));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
