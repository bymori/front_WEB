/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 18:42:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-07 11:37:24
 */
import React from 'react';

// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

import { decAction, subAction } from '../store/actionCreators';

function About(props) {
  return (
    <div>
      <hr />
      <h1>About3</h1>
      <h2>当前计数: {props.counter}</h2>
      <button onClick={(e) => props.decrement()}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button>

      <h1>Banner</h1>
      <ul>
        {props.banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>

      <h1>Recommend</h1>
      <ul>
        {props.recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrement: function () {
      dispatch(decAction());
    },
    subNumber: function (num) {
      dispatch(subAction(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
