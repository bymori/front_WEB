/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-03 15:21:53
 */
import React, { PureComponent } from 'react';

import { HomeWrapper, TitleWrapper } from './style';

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>我是home的标题</TitleWrapper>
        <div className="banner">
          <span>轮播图1</span>
          <span className="active">轮播图2</span>
          <span>轮播图3</span>
          <span>轮播图4</span>
        </div>
      </HomeWrapper>
    );
  }
}
