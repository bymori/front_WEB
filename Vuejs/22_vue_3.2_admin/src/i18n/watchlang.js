/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 21:18:49
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 21:18:50
 */
import { watch } from 'vue'
import store from '@/store'

export const watchLang = (...cbs) => {
  watch(
    () => store.getters.lang,
    () => {
      cbs.forEach((cb) => cb(store.getters.lang))
    },
    { deep: true }
  )
}
