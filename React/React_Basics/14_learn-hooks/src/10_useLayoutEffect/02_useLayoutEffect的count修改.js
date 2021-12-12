/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 17:14:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 17:19:16
 */
import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function LayoutEffectCounterDemo() {
  const [count, setCount] = useState(10);

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random() + 200);
    }
  }, [count]);

  return (
    <div>
      <h2>数字: {count}</h2>
      <button onClick={(e) => setCount(0)}>修改数字</button>
    </div>
  );
}
