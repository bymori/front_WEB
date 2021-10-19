/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-19 23:39:02
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-19 23:40:41
 */
export default {
  state: {
    isCollapse: false,
    currentMenu: null,
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ]
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  }
}
