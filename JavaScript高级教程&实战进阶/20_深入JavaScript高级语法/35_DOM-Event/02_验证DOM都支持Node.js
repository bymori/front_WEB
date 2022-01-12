/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-01-12 12:05:37
 * @LastEditors: by_mori
 * @LastEditTime: 2022-01-12 12:27:02
 */
const divEl = document.querySelector('#box');
const spanEl = document.querySelector('.content');

const divEls = document.querySelector('#box').getAttribute('age');

const h2El = document.querySelector('#h2');
const buttonEl = document.querySelector('#button');

// 常见的属性
console.log('节点的名称 ', divEl.nodeName, spanEl.nodeName);
console.log('节点的类型 ', divEl.nodeType, spanEl.nodeType);
console.log(
  '节点的值 ',
  divEl.nodeValue,
  spanEl.nodeValue,
  divEls,
  buttonEl.nodeValue
);

// childNodes
const spanChildNodes = spanEl.childNodes;
const textNode = spanChildNodes[0];
console.log(textNode.nodeValue);

// 常见的方法
const strongEl = document.createElement('strong');
strongEl.textContent = '我是strong元素';
divEl.appendChild(strongEl);

// 注意事项: document对象
document.body.appendChild(strongEl);

/**
在文档对象模型 (DOM) 中，每个节点都是一个对象。DOM 节点有三个重要的属性 ：

1. nodeName : 节点的名称
2. nodeValue ：节点的值
3. nodeType ：节点的类型

一、nodeName 属性: 节点的名称，是只读的。

1. 元素节点的 nodeName 与标签名相同
2. 属性节点的 nodeName 是属性的名称
3. 文本节点的 nodeName 永远是 #text
4. 文档节点的 nodeName 永远是 #document

二、nodeValue 属性：节点的值

1. 元素节点的 nodeValue 是 undefined 或 null
2. 文本节点的 nodeValue 是文本自身
3. 属性节点的 nodeValue 是属性的值

三、nodeType 属性: 节点的类型，是只读的。以下常用的几种结点类型:

元素类型    节点类型
  元素          1
  属性          2
  文本          3
  注释          8
  文档          9
 */
