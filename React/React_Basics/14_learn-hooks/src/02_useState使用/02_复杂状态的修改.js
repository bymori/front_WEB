/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 20:35:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 20:56:08
 */
import React, { useState } from 'react';

export default function ComplexHookState() {
  const [friends, setFriends] = useState([
    'Naomi',
    'Josephine',
    'Dennis',
    'momo',
  ]);

  const [students, setStudents] = useState([
    { id: 110, name: 'Art', age: 19 },
    { id: 111, name: 'Claude', age: 29 },
    { id: 112, name: 'Kristy', age: 25 },
  ]);

  function addFriend() {
    friends.push('Terrance');
    setFriends(friends);
  }

  function incrementAgeWithIndex(index) {
    const newStudents = [...students];
    newStudents[index].age += 1;
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>好友列表:</h2>
      <ul>
        {friends.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button onClick={(e) => setFriends([...friends, 'tom'])}>添加朋友</button>
      {/* 错误的做法 */}
      <button onClick={addFriend}>错误的做法-添加朋友</button>

      <h2>学生列表:</h2>
      <ul>
        {students.map((item, index) => {
          return (
            <li key={item.id}>
              <span>
                名字: {item.name} 年龄: {item.age}
              </span>
              <button onClick={(e) => incrementAgeWithIndex(index)}>
                age+1
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
