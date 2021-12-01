/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-01 15:46:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-01 16:29:03
 */
import React, { PureComponent } from 'react';

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} region="中国" />;
  };
}

class Home extends PureComponent {
  render() {
    return (
      <h3>
        Home:{' '}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h3>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h3>
        About:{' '}
        {`昵称: ${this.props.nickname} 等级: ${this.props.level} 区域: ${this.props.region}`}
      </h3>
    );
  }
}

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <EnhanceHome nickname="momo" level={90} />
        <EnhanceAbout nickname="mori" level={99} />
      </div>
    );
  }
}

export default App;
