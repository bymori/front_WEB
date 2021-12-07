/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 12:21:03
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-07 10:47:29
 */
import React, { PureComponent } from 'react';

// import Home from './pages/home';
// import About from './pages/about';
// import Home from './pages/home2';
// import About from './pages/about2';
import Home from './pages/home3';
import About from './pages/about3';

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
