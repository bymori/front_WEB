/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 15:10:19
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 21:24:21
 */
import store from './store/index.js';

import {
  addAction,
  subAction,
  incAction,
  decAction,
} from './store/actionCreators.js';

store.subscribe(() => {
  console.log(store.getState());
});

// 1.基本做法 -- 这样做简单但是调用起来很复杂
// console.log('dispatch前---dispatching action:', addAction(10));
// store.dispatch(addAction(10));
// console.log('dispatch后---new state:', store.getState());

// console.log('dispatch前---dispatching action:', addAction(15));
// store.dispatch(addAction(15));
// console.log('dispatch后---new state:', store.getState());

// 2.封装一个函数 -- 使用 dispatch 时 就必须使用 dispatchAndLogging 才可以
// function dispatchAndLogging(action) {
//   console.log('dispatch前---dispatching action:', action);
//   store.dispatch(action);
//   console.log('dispatch后---new state:', store.getState());
// }
// dispatchAndLogging(addAction(10));
// dispatchAndLogging(addAction(5));

// 3.函数的基础之上进行优化: 修改原有的dispatch
// hack技术: Monkey Patch
// 这就不会影响原来的调用，也就是 Monkey Patch 但是可能污染了原来的store

// const next = store.dispatch;
// function dispatchAndLogging(action) {
//   console.log('dispatch前---dispatching action:', action);
//   next(action);
//   console.log('dispatch后---new state:', store.getState());
// }
// store.dispatch = dispatchAndLogging;

// dispatchAndLogging(addAction(10));
// dispatchAndLogging(addAction(5));

// 4.将之前的操作进行封装
// 封装patchLogging的代码
function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log('dispatch前---dispatching action:', action);
    next(action);
    console.log('dispatch后---new state:', store.getState());
  }
  // store.dispatch = dispatchAndLogging;

  return dispatchAndLogging;
}

// 封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;

  function dispatchAndThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }

  // store.dispatch = dispatchAndThunk;

  return dispatchAndThunk;
}

// patchLogging(store);
// patchThunk(store);

// store.dispatch(addAction(10));
// store.dispatch(addAction(5));

// function foo(dispatch, getState) {
//   dispatch(subAction(10));
// }
// store.dispatch(foo);

// 5.封装applyMiddleware
function applyMiddlewares(...middlewares) {
  // const newMiddleware = [...middlewares];
  middlewares.forEach((middleware) => {
    store.dispatch = middleware(store);
  });
}

applyMiddlewares(patchLogging, patchThunk);

store.dispatch(addAction(10));
