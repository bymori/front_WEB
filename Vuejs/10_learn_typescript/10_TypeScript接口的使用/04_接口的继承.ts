/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 23:39:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 23:39:25
 */
interface ISwim {
  swimming: () => void;
}

interface IFly {
  flying: () => void;
}

interface IAction extends ISwim, IFly {}

const action: IAction = {
  swimming() {},
  flying() {},
};
