/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-10 15:37:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-10 21:03:37
 */
import React, { PureComponent } from 'react';

import { Link, Outlet } from 'react-router-dom';

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <nav>
          <Link to="me">My Profile</Link>
        </nav>
        {/*
       将直接根据上面定义的不同路由参数，渲染<MyProfile />或<OthersProfile />
        */}
        <Outlet />
      </div>
    );
  }
}
