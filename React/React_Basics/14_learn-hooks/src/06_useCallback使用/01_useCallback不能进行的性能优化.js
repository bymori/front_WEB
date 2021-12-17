/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 10:00:40
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-17 21:55:35
 */
import React, { useState, useCallback, useMemo } from 'react';

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0);

  // const memoizedCallback = useCallback(() => {
  //   doSomething(a, b);
  // }, [a, b]);

  const increment1 = () => {
    console.log('执行increment1函数');
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    console.log('执行increment2函数');
    setCount(count + 1);
  }, [count]);

  const increment3 = useMemo(() => {
    console.log('执行increment2函数');
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>CallbackHookDemo01: {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  );
}
