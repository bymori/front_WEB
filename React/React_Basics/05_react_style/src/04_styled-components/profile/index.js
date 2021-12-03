/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-02 22:29:32
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-03 15:32:25
 */
import React, { PureComponent } from 'react';

import styled from 'styled-components';

/**
 * 特点:
 *  1.props穿透
 *  2.attrs的使用
 *  3.传入state作为props属性
 */

const IOInput = styled.input.attrs({
  placeholder: 'momo placeholder',
  bColor: 'red',
})`
  background-color: lightgreen;
  border-color: ${(props) => props.bColor};
  color: ${(props) => props.color};
`;

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
    };
  }

  render() {
    return (
      <div>
        <input type="password" />
        <IOInput type="text" color={this.state.color} />
        <h2 style={{ color: this.state.color }}>我是Profile的标题</h2>
        <ul>
          <li>设置列表1</li>
          <li>设置列表2</li>
          <li>设置列表3</li>
        </ul>
      </div>
    );
  }
}
