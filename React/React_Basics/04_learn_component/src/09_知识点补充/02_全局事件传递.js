/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-30 08:32:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-30 16:20:54
 */
import React, { PureComponent } from 'react';

import { EventEmitter } from 'events';
// 事件总线: event bus
const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    eventBus.addListener('sayHello', this.handleSayHelloListener);
  }

  componentWillUnmount() {
    eventBus.removeListener('sayHello', this.handleSayHelloListener);
  }

  handleSayHelloListener(num, message) {
    console.log(num, message);
  }

  render() {
    return <div>Home</div>;
  }
}
class Profile extends PureComponent {
  render() {
    return (
      <div>
        Profile
        <button onClick={(e) => this.emitEvent()}>点击了profile按钮</button>
      </div>
    );
  }

  emitEvent() {
    eventBus.emit('sayHello', 123, 'Hello Home');
  }
}
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
