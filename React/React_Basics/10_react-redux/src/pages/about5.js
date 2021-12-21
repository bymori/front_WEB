/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 18:42:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-21 21:04:47
 */
import React from 'react';

// import { connect } from '../utils/connect';
import { connect, useSelector, shallowEqual } from 'react-redux';

import { decAction, subAction } from '../store/actionCreators';

function About(props) {
  const { banners, recommends } = useSelector(
    (state) => ({
      banners: state.banners,
      recommends: state.recommends,
    }),
    shallowEqual
    // hooks比较方式 shallowEqual 进行浅层比较 可以进行优化
  );

  console.log('About页面重新渲染了');
  return (
    <div>
      <hr />
      <h1>About4</h1>
      {/* <h2>当前计数: {props.counter}</h2>
      <button onClick={(e) => props.decrement()}>-1</button>
      <button onClick={(e) => props.subNumber(5)}>-5</button> */}

      <h1>Banner</h1>
      <ul>
        {banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>

      <h1>Recommend</h1>
      <ul>
        {recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default About;
