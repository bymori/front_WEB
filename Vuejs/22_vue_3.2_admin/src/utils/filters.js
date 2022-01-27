/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 22:38:33
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 22:49:46
 */
import dayjs from 'dayjs'

const filterTimes = (val, format = 'YYYY-MM-DD') => {
  if (!isNull(val)) {
    val = ~~val * 1000
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

export const isNull = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '[]') return true
}

export default (app) => {
  app.config.globalProperties.$filters = {
    filterTimes
  }
}
