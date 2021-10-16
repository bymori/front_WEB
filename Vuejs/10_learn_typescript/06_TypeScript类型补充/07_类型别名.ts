/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 18:12:34
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 18:12:34
 */
// type用于定义类型别名(type alias)
type IDType = string | number | boolean;
type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printId(id: IDType) {}

function printPoint(point: PointType) {}
