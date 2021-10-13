/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-13 23:06:44
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 23:13:48
 */
import { ref, watch } from 'vue';

export default function(title = '默认的title') {
  const titleRef = ref(title);

  watch(
    titleRef,
    (newValue) => {
      document.title = newValue;
    },
    {
      immediate: true,
    }
  );

  return titleRef;
}
