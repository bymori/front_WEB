/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-28 23:26:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-11-29 09:25:04
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildCpn2 extends Component {
  // es6中的 class fields 写法
  static propTypes = {};

  static defaultProps = {};
}

function ChildCpn(props) {
  console.log(props);

  const { name, age, height } = props;
  const { names } = props;

  return (
    <div>
      <h2>子组件展示数据: {name + ' ' + age + ' ' + height}</h2>
      <ul>
        {names.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array,
};
ChildCpn.defaultProps = {
  name: '默认值',
  age: 30,
  height: 1.88,
  names: ['aaa', 'bbb'],
};

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="momo" age={19} height={1.78} names={['abc', 'cba']} />
        <ChildCpn name="mori" age={26} height={1.69} names={['nba', 'mba']} />
        <ChildCpn />
      </div>
    );
  }
}
