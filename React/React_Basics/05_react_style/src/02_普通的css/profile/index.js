/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 22:37:45
 */
import React, { PureComponent } from 'react';

import './style.css';

export default class Profile extends PureComponent {
  render() {
    return (
      <div className="profile">
        <h2 className="title">我是Profile的标题</h2>
        <ul className="settings">
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}
