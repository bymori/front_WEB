/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 12:27:38
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 15:21:45
 */
import React, { PureComponent } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProfilePage() {
  let location = useLocation();
  let { slug } = useParams();
  console.log(location);
  console.log(slug);

  return (
    <>
      <br />
      {location.hash} --hash
      <br />
      {location.key} --key
      <br />
      {location.pathname} --pathname
      <br />
      {location.search} --search
      <br />
      {location.state} --state
    </>
  );
}

export default class Detail2 extends PureComponent {
  render() {
    return (
      <div>
        <h2>
          Detail3: <ProfilePage />
        </h2>
      </div>
    );
  }
}
