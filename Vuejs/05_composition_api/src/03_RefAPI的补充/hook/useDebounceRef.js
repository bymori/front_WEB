/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-13 19:19:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 19:29:56
 */
import { customRef } from 'vue';
// 自定义ref
export default function(value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
