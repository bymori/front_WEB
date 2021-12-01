/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-11-30 21:53:27
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-01 15:46:56
 */
import React, { PureComponent } from 'react';

class App extends PureComponent {
  render() {
    return <div>App: {this.props.name}</div>;
  }
}
function enhanceComponent(WrappedComponent) {
  class NewComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  NewComponent.displayName = 'NewApp';
  return NewComponent;
}

function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />;
  }

  NewComponent.displayName = 'NewApp2';
  return NewComponent;
}

// const EnhanceComponent = enhanceComponent(App);
const EnhanceComponent = enhanceComponent2(App);

export default EnhanceComponent;
