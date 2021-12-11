/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 18:11:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 20:36:58
 */
import React from 'react';

// import CounterClass from './01_体验hooks/01_counter-class';
// import CounterHook from './01_体验hooks/02_counter-hook';
// import CounterHook2 from './01_体验hooks/03_counter-hook';

import MultiHookState from './02_useState使用/01_多个状态的使用';
import ComplexHookState from './02_useState使用/02_复杂状态的修改';

export default function App() {
  return (
    <div>
      {/* 01_体验hooks */}
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <CounterHook2 /> */}

      {/* 02_useState使用 */}
      {/* <MultiHookState /> */}
      <ComplexHookState />
    </div>
  );
}
