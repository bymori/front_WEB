/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 19:52:25
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 20:26:28
 */
import React, { useContext } from 'react';
import useUserContext from '../hooks/user-hook';

export default function CustomContextShareHook() {
  const [user, token] = useUserContext();
  console.log(user, token);

  return <div>CustomContextShareHook</div>;
}

// import React, { useContext } from 'react';
// import { UserContext, TokenContext } from '../App';

// export default function CustomContextShareHook() {
//   const user = useContext(UserContext);
//   const token = useContext(TokenContext);
//   console.log(user, token);

//   return <div>CustomContextShareHook</div>;
// }
