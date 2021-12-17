/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-03 16:54:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-14 22:04:15
 */
import React, { PureComponent } from 'react';

import classNames from 'classnames';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: true,
    };
  }

  render() {
    const { isActive } = this.state;
    const isBar = false;
    const errClass = 'error';
    const warnClass = 10;

    return (
      <div>
        {/* 原生React中添加class的三种方法 */}
        <h2 className={'bor bar active title'}>我是标题1</h2>
        <h2 className={'title ' + (isActive ? 'active' : '')}>我是标题2</h2>
        <h2 className={['title', isActive ? 'active' : ''].join(' ')}>
          我是标题3
        </h2>
        <hr />
        {/* 通过classnames库添加class */}
        <h2 className="foo bar active title">我是标题4</h2> {/* */}
        <h2 className={classNames('foo', 'bar', 'active', 'title')}>
          我是标题5
        </h2>
        <h2 className={classNames({ active: isActive, bar: isBar }, 'title')}>
          我是标题6
        </h2>
        <h2
          className={classNames('foo', errClass, warnClass, {
            active: isActive,
          })}>
          我是标题7
        </h2>
        <h2 className={classNames(['active', 'title'])}>我是标题8</h2>
        <h2 className={classNames(['active', 'title', { bar: isBar }])}>
          我是标题9
        </h2>
      </div>
    );
  }
}
