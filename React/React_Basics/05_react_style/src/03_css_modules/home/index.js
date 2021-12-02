/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 22:50:26
 */
import React, { PureComponent } from 'react';

import homeStyle from './style.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <h2 className={homeStyle.title}>我是home的标题</h2>
        <div className={homeStyle.banner}>
          <span>轮播图</span>
        </div>
      </div>
    );
  }
}
