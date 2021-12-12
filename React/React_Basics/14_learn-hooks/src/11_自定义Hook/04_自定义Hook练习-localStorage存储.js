/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 21:06:42
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 21:37:56
 */
import React, { useState, useEffect } from 'react';

import useLocalStorage from '../hooks/local-store-hook';

export default function CustomDataStoreHook() {
  const [name, setName] = useLocalStorage('name');

  //   const [name, setName] = useState(() => {
  //     // const name = window.localStorage.getItem('name');
  //     const name = JSON.parse(window.localStorage.getItem('name'));
  //     return name;
  //   });

  //   useEffect(() => {
  //     window.localStorage.setItem('name', JSON.stringify(name));
  //   }, [name]);

  //   console.log(name);

  return (
    <div>
      <h3>CustomDataStoreHook-{name}</h3>
      <button onClick={(e) => setName('momo')}>设置name</button>
    </div>
  );
}
