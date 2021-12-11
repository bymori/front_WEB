/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 12:27:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 12:58:46
 */
import React, { PureComponent } from 'react';
import { useLocation } from 'react-router-dom';

function ProfilePage() {
  let { hash, key, pathname, search, state } = useLocation();
  //   console.log(location);
  return (
    // <>
    //   <br />
    //   {location.hash} --hash
    //   <br />
    //   {location.key} --key
    //   <br />
    //   {location.pathname} --pathname
    //   <br />
    //   {location.search} --search
    //   <br />
    //   {location.state} --state
    // </>
    <>
      <br />
      {hash} --hash
      <br />
      {key} --key
      <br />
      {pathname} --pathname
      <br />
      {search} --search
      <br />
      {state} --state
    </>
  );
}

export default class Detail2 extends PureComponent {
  render() {
    return (
      <div>
        <h2>
          Detail2: <ProfilePage />
        </h2>
      </div>
    );
  }
}
