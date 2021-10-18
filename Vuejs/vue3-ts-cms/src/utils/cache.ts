/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-18 22:14:05
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-18 22:17:30
 */
class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}
export default new LocalCache()
