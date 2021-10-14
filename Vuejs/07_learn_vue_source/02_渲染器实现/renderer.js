/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-14 17:14:30
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-14 17:17:50
 */
const h = (tag, props, children) => {
  // vnode -> javascript对象 -> {}
  return {
    tag,
    props,
    children,
  };
};
