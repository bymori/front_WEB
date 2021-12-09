/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2021-12-06 16:08:24
 * @LastEditors: by_mori
 * @LastEditTime: 2021-12-09 16:33:17
 */
import { createStore, applyMiddleware, compose } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';
import reducer from './reducer.js';

// composeEnhancers函数
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 应用一些中间件

// 2.创建sagaMiddleware中间件
const sagaMiddleware = createSagaMiddleware();

// 1.引入thunkMiddleware中间件(上面)
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

sagaMiddleware.run(saga);

export default store;
