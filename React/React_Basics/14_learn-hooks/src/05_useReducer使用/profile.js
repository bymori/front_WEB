/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 09:57:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 09:57:30
 */
import React, { useReducer } from 'react';

import reducer from './reducer';

export default function Profile() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <h2>Profile当前计数: {state.counter}</h2>
      <button onClick={(e) => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={(e) => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}
