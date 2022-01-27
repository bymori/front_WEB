/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-27 17:27:57
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-27 21:15:14
 */
export const steps = (i18n) => [
  {
    element: '#guide',
    popover: {
      title: i18n('driver.guideBtn'),
      description: '这里是引导使用教程 如果你忘记了 可以重新点击这个按钮',
      position: 'left'
    }
  },
  {
    element: '#hamburger',
    popover: {
      title: i18n('driver.hamburgerBtn'),
      description: '点击这个图标 可以收缩展开菜单的选项',
      position: 'bottom'
    }
  },
  {
    element: '#screenFull',
    popover: {
      title: i18n('driver.fullScreen'),
      description: '点击全屏 至此 自由去探索更多吧',
      position: 'left'
    }
  }
]
