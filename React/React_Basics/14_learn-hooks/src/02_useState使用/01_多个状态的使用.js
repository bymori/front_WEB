/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 20:26:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 20:33:09
 */
import React, { useState } from 'react';

export default function MultiHookState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(19);
  const [friends, setFriends] = useState([
    'Naomi',
    'Josephine',
    'Dennis',
    'momo',
  ]);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <h2>我的年龄: {age}</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
