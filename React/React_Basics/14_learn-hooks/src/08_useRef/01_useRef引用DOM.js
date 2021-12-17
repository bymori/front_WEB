/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 12:04:47
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-17 22:04:53
 */
import React, { useRef } from 'react';

class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>;
  }
}

function TestCpn2(props) {
  return <h2>TestCpn2</h2>;
}

export default function RefHookDemo01() {
  // const refContainer = useRef(initialValue);

  const titleRef = useRef();
  const inputRef = useRef();

  const testRef = useRef();
  const testRef2 = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = 'Hello World';
    inputRef.current.focus();

    console.log(testRef.current);
    console.log(testRef2.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testRef} />
      <TestCpn2 ref={testRef2} />

      <button onClick={(e) => changeDOM()}>修改DOM</button>
    </div>
  );
}
