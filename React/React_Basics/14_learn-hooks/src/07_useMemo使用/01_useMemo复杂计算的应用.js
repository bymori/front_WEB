/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 10:39:13
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 10:57:52
 */
import React, { useState, useMemo } from 'react';

function calcNumber(count) {
  console.log('calcNumber重新计算');

  let total = 0;
  for (let i = 0; i <= count; i++) {
    total += i;
  }
  return total;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  //   const total = calcNumber(count);
  const total = useMemo(() => {
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>
        计算数字的和: {total}
        <br />
        count为: {count}
      </h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
