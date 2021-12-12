/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 16:16:14
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 16:38:51
 */
import React, { useRef, forwardRef } from 'react';

const IOInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});

export default function ForwardRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <IOInput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
