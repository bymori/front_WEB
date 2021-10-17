/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-17 10:37:50
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-17 10:52:03
 */
// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void;
}

// 声明变量/函数/类
declare let ioName: string;
declare let ioAge: number;
declare let ioHeight: number;

declare function ioFoo(): void;

declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number);
}

// 声明文件
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';

// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any;
}
