/*
 * @Descripttion: 
 * @version: 
 * @Author: by_mori
 * @Date: 2021-10-16 20:27:31
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 20:27:32
 */
// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
  name: "ioinn",
  eating() {
    console.log(this.name + " eating")
  }
}

info.eating()

export {}