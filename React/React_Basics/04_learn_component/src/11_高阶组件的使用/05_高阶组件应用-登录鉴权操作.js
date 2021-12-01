/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-01 21:44:51
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-01 21:52:33
 */
import React, { PureComponent } from 'react';

class LoginPage extends PureComponent {
  render() {
    return <h2>LoginPage</h2>;
  }
}

function withAuth(WrappedComponent) {
  const NewCpn = (props) => {
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoginPage />;
    }
  };

  NewCpn.displayName = 'AuthCpn';

  return NewCpn;
}

// 购物车组件
class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>;
  }
}

const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true} />
      </div>
    );
  }
}
