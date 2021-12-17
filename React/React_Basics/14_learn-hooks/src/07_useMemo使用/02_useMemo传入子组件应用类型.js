/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 11:00:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-17 22:02:09
 */
import React, { memo, useState, useMemo } from 'react';

const IOInfo = memo((props) => {
  console.log('IOInfo重新渲染');

  return (
    <h2>
      名字: {props.info.name} 年龄: {props.info.age}
    </h2>
  );
});

export default function MemoHookDemo02() {
  console.log('MemoHookDemo02重新渲染');
  const [show, setShow] = useState(true);

  //   const info = { name: 'momo', age: 19 };
  const info = useMemo(() => {
    return { name: 'momo', age: 19 };
  }, []);

  return (
    <div>
      <IOInfo info={info} />
      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
