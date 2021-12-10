/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-10 15:32:46
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-10 21:58:09
 */
import React, { PureComponent } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';

export function AboutHistory(props) {
  return <h2>企业成立于2000年, 拥有悠久的历史文化 </h2>;
}

export function AboutCulture(props) {
  return <h2>创新/发展/共赢</h2>;
}

export function AboutContact(props) {
  return <h2>联系电话: 021-88888888</h2>;
}

export function AboutJoin(props) {
  return <h2>投递简历到ioinn@ioinn.cn</h2>;
}

// function QueryNavLink({ to, ...props }) {
//   let location = useLocation();
//   console.log(location);
//   return <NavLink to={to + location.search} {...props} />;
// }

function JumpToJoin() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('join');
  }
  return <button onClick={handleClick}>加入我们</button>;
}

export default class About extends PureComponent {
  render() {
    console.log(this.props.route);

    const activeClassName = ({ isActive }) => (isActive ? 'about-active' : '');

    return (
      <div>
        <NavLink to="history" className={activeClassName}>
          企业历史
        </NavLink>
        <NavLink to="culture" className={activeClassName}>
          企业文化
        </NavLink>
        <NavLink to="contact" className={activeClassName}>
          联系我们
        </NavLink>
        <JumpToJoin />
        {/* <button onClick={(e) => this.jumpToJoin()}>加入我们</button> */}

        <Routes>
          <Route path="history" element={<AboutHistory />} />
          <Route path="culture" element={<AboutCulture />} />
          <Route path="contact" element={<AboutContact />} />
          <Route path="join" element={<AboutJoin />} />
        </Routes>
      </div>
    );
  }

  // jumpToJoin() {
  //   console.log(this.props.history);
  //   console.log(this.props.location);
  //   console.log(this.props.match);
  //   // this.props.history.push('join');
  // }
}
