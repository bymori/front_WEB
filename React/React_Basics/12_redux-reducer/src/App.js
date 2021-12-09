/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 12:21:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 20:26:20
 */
import React, { PureComponent } from 'react';

// 手动和redux联系
// import Home from './pages/home';
// import About from './pages/about';

// 自定义的connect
// import Home from './pages/home2';
// import About from './pages/about2';

// react-redux-connect
// import Home from './pages/home3';
// import About from './pages/about3';

// redux-thunk使用
// import Home from './pages/home4';
import About from './pages/about4';

// redux-saga使用
import Home from './pages/home5';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
