/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 16:44:35
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-17 22:10:13
 */
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const IOInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );

  return <input ref={inputRef} type="text" />;
});

export default function UseImperativeHandleHookDemo() {
  const inputRef = useRef();

  return (
    <div>
      <IOInput ref={inputRef} />
      <button onClick={(e) => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
