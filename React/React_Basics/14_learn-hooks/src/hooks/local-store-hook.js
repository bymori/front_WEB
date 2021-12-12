/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 21:36:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 21:37:41
 */
import { useState, useEffect } from 'react';

function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    // const name = window.localStorage.getItem('name');
    const name = JSON.parse(window.localStorage.getItem(key));
    return name;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name));
  }, [name]);

  return [name, setName];
}

export default useLocalStorage;
