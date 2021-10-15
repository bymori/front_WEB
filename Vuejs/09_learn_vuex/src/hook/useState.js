/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-15 19:46:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 01:08:07
 */
import { mapState, createNamespacedHelpers } from 'vuex';
import { useMapper } from './useMapper';

export function useState(moduleName, mapper) {
  let mapperFn = mapState;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName;
  }

  return useMapper(mapper, mapperFn);
}
