/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 15:52:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 15:57:36
 */
import React, { useState, useRef, useEffect } from 'react';

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);

  const numRef = useRef(count);

  useEffect(() => {
    numRef.current = count;
  }, [count]);

  return (
    <div>
      <h2>numRef中的值: {numRef.current}</h2>
      <h2>count中的值: {count}</h2>

      <h3>count上一次的值: {numRef.current}</h3>
      <h3>count这一次的值: {count}</h3>

      <button onClick={(e) => setCount(count + 10)}>+10</button>
    </div>
  );
}
