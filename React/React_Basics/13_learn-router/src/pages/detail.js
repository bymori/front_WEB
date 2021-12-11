/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 11:06:04
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 11:43:50
 */
import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  let { id } = useParams();
  console.log(id);
  return <>{id}</>;
}

export default class Detail extends PureComponent {
  render() {
    // const match = this.props.match;
    // console.log(match.params);
    // console.log(this.props);

    return (
      <div>
        <h2>
          {/* https://reactrouter.com/docs/en/v6/api#useparams */}
          Detail: <ProfilePage />
        </h2>
      </div>
    );
  }
}
