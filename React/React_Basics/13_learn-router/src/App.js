/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-09 20:42:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-10 22:08:59
 */
import React, { PureComponent } from 'react';

import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import User from './pages/user';

import './App.css';
import NoMatch from './pages/noMatch';
import Login from './pages/login';
import Product from './pages/Product';

export function MyProfile(props) {
  return <h2>MyProfile</h2>;
}
export function OthersProfile(props) {
  return <h2>OthersProfile</h2>;
}

function Merchandise() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('/product');
  }
  return <button onClick={handleClick}>商品</button>;
}

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      links: [
        { to: '/', title: '首页' },
        { to: '/about', title: '关于' },
        { to: '/profile', title: '我的' },
      ],
    };
  }

  render() {
    const activeClassName = ({ isActive }) => (isActive ? 'link-active' : '');

    return (
      <div>
        <BrowserRouter>
          {/* <Link to="/">首页</Link>
          <Link to="/about">关于</Link>
          <Link to="/profile">我的</Link> */}

          {/* 1.NavLink的使用 */}
          {/* https://reactrouter.com/docs/en/v6/upgrading/v5#remove-activeclassname-and-activestyle-props-from-navlink- */}
          {/* <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'red' : '',
              fontSize: isActive ? '30px' : '',
            })}>
            首页
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'red' : '',
              fontSize: isActive ? '30px' : '',
            })}>
            关于
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive }) => ({
              color: isActive ? 'red' : '',
              fontSize: isActive ? '30px' : '',
            })}>
            我的
          </NavLink> */}

          <NavLink to="/" className={activeClassName}>
            首页
          </NavLink>
          <NavLink to="/about" className={activeClassName}>
            关于
          </NavLink>
          <NavLink to="/profile" className={activeClassName}>
            我的
          </NavLink>
          <NavLink to="/abc" className={activeClassName}>
            aaa
          </NavLink>
          <NavLink to="/user" className={activeClassName}>
            用户
          </NavLink>

          <Merchandise />

          {/* <button
            onClick={(e) => {
              useNavigate('/product');
            }}>
            商品
          </button> */}

          {/* Error: A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>. */}
          {/* https://blog.csdn.net/weixin_40906515/article/details/104957712 */}

          {/* https://reactrouter.com/docs/en/v6/upgrading/v5#remove-redirects-inside-switch 在这里有特殊的含义。仅当没有其他路由匹配时，它才会匹配。"*" */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/profile" element={<Profile />}>
              <Route path=":id" element={<MyProfile />} />
              <Route path="me" element={<OthersProfile />} />
            </Route>
            <Route path="/user" element={<User />} />
            <Route path="/product" element={<Product />} />
            {/* <Route path="/:id" element={<User />} /> */}
            <Route path="/login" element={<Login />} />

            {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
