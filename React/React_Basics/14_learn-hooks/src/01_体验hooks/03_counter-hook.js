/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 20:00:49
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 20:20:38
 */
import React, { useState } from 'react';

export default function CounterHook() {
  const [count, setCount] = useState(0);

  console.log('CounterHook渲染');

  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
    </div>
  );
}
