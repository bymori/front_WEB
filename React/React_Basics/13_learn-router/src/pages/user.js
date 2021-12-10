/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-10 19:57:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-10 20:26:05
 */
import React, { PureComponent } from 'react';

// Normal <Redirect> elements that are not inside a <Switch> are ok to remain. They will become <Navigate> elements in v6.
import { Navigate } from 'react-router-dom';

export default class User extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
        <h3>用户名:沫沫</h3>
      </div>
    ) : (
      <Navigate to="/login" />
    );
  }

  // 因为 react-router-dom v6 版本中删除了Redirect 故 使用Navigate 替代相同效果
}
