/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 13:08:48
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 16:57:58
 */
import dayjs from 'dayjs';

export default function(app) {
  app.directive('format-time', {
    created(el, bindings) {
      bindings.formatString = 'YYYY-MM-DD A-hh:mm:ss:SSS';
      if (bindings.value) {
        bindings.formatString = bindings.value;
      }
    },
    mounted(el, bindings) {
      const textContent = el.textContent;
      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
      }
      console.log(timestamp);
      el.textContent = dayjs(timestamp).format(bindings.formatString);
    },
  });
}

// https://dayjs.gitee.io/docs/zh-CN/parse/string-format 字符串 + 格式
