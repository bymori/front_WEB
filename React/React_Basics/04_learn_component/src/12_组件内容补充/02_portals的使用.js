/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-01 22:51:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-02 16:10:21
 */
import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('modal')
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
