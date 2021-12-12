/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-12 20:26:01
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-12 20:26:01
 */
import { useContext } from 'react';
import { UserContext, TokenContext } from '../App';

function useUserContext() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);

  return [user, token];
}

export default useUserContext;
