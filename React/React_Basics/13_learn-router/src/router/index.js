/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 15:34:15
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 16:36:27
 */

import Home from '../pages/home';
import About, {
  AboutHistory,
  AboutCulture,
  AboutContact,
  AboutJoin,
} from '../pages/about';
import Profile from '../pages/profile';
import User from '../pages/user';
import NoMatch from '../pages/noMatch';
import Login from '../pages/login';
import Product from '../pages/Product';
import Detail from '../pages/detail';
import Detail2 from '../pages/detail2';
import Detail3 from '../pages/detail3';

export function MyProfile(props) {
  return <h2>MyProfile</h2>;
}
export function OthersProfile(props) {
  return <h2>OthersProfile</h2>;
}

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about/*',
    element: <About />,
    children: [
      { path: 'history', element: <AboutHistory /> },
      { path: 'culture', element: <AboutCulture /> },
      { path: 'contact', element: <AboutContact /> },
      { path: 'join', element: <AboutJoin /> },
    ],
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      { path: ':id', element: <MyProfile /> },
      { path: 'me', element: <OthersProfile /> },
    ],
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
  {
    path: '/detail2',
    element: <Detail2 />,
  },
  {
    path: '/detail3',
    element: <Detail3 />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // 重定向
  { path: '/home', redirectTo: '/' },
  // 404找不到
  {
    path: '*',
    element: <NoMatch />,
  },
];

export default routes;
