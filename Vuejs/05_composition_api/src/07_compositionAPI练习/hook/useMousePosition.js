/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-13 23:27:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-13 23:47:32
 */
import { ref } from 'vue';

export default function() {
  const mouseX = ref(0);
  const mouseY = ref(0);

  window.addEventListener('mousemove', (event) => {
    mouseX.value = event.pageX;
    mouseY.value = event.pageY;
  });

  return { mouseX, mouseY };
}
