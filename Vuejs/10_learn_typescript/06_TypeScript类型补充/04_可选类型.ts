/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 17:53:08
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 17:53:08
 */

// Point: x/y/z -> 对象类型
// {x: number, y: number, z?: number}
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
  if (point.z) {
    console.log(point.z);
  }
}

printPoint({ x: 123, y: 321 });
printPoint({ x: 123, y: 321, z: 111 });

export {};
