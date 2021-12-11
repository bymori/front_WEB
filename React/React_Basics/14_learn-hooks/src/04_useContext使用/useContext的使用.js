/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-11 22:47:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-11 22:55:13
 */
import React, { useContext } from 'react';

import { UserContext, ThemeContext } from '../App';

export default function ContextHookDemo() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  console.log(user, theme);

  return (
    <div>
      <h2>ContextHookDemo</h2>
    </div>
  );
}
