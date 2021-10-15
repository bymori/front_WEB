/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 19:46:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:21:29
 */
import { mapState } from 'vuex';
import { useMapper } from './useMapper';

export function useState(mapper) {
  return useMapper(mapper, mapState);
}
