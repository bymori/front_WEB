/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 17:14:00
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 17:15:06
 */
import React, { useState, useEffect } from 'react';

export default function EffectCounterDemo() {
  const [count, setCount] = useState(10);

  useEffect(() => {
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
