/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 22:11:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 22:12:36
 */
import React, { useState, useEffect } from 'react';

export default function HookCounterChangeTitle() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = 'Hook ' + counter;
  });

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
