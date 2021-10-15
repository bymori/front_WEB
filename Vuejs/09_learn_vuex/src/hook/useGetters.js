/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 19:46:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-15 21:20:32
 */
import { mapGetters } from 'vuex';
import { useMapper } from './useMapper';

export function useGetters(mapper) {
  return useMapper(mapper, mapGetters);
}
