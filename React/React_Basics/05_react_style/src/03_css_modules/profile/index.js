/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 22:54:00
 */
import React, { PureComponent } from 'react';

import style from './style.module.css';

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
    };
  }

  render() {
    return (
      <div className="profile">
        <h2 className={style.title} style={{ color: this.state.color }}>
          我是Profile的标题
        </h2>
        <ul className={style.settings}>
          <li className={style.settingItem}>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}
