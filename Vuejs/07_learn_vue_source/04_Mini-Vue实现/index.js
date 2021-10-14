/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 19:41:56
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 20:05:49
 */
function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVnode = null;

      watchEffect(function () {
        if (!isMounted) {
          oldVnode = rootComponent.render();
          mount(oldVnode, container);
          isMounted = true;
        } else {
          const newVnode = rootComponent.render();
          patch(oldVnode, newVnode);
          oldVnode = newVnode;
        }
      });
    },
  };
}
