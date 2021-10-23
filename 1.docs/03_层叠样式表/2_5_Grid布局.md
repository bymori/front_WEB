# Flex Grid 布局方式对比

## Flex

- Flexbox 属于一维(`1-Dimension`)的排版方式
- 一个`Flexbox`容器只能控制一个方向
  - 水平 or 垂直 方向
- 如需控制另一方向则需要 再添加一层`Flexbox`容器

## Grid

- Gird则是二维(`2-Dimensions`)的排版方式
- Grid容器 可以一次控制两个方向 `水平` or `垂直` :smile:
  - 可以直接定义容器内元素的位置
- Grid容器的分割线称作`Grid Line`
- Grid容器内的方格称作`Grid Area`

### 声明容器

display: grid;或display: inline-grid;或display: subgrid;

grid 和 inline-grid 很好理解就是块级网格及行内块级网格

subgrid 是用来定义子网格，子网格会继承父网格的一系列规格

```css
grid-row: 1/3;  /* 由第一行到第三行*/
grid-column: 1/3; /* 由第一列到第三列*/
/* grid-column以及grid-row后面的1 / 3，不是三分之一的意思，是指从第1列开始，到第3列结束 不包括第三列 */
```

![image-20210529235541210](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210529235541210.png)

### 由第几开始延伸多少 span

```css
grid-column: 2 / span 3; /* 由第二列开始 延伸三列  span为 延伸*/
```

![image-20210530000011489](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210530000011489.png)

```css
grid-area: 1/1/4/3;
/* grid-column以及grid-row简写方式 */
/* 即 grid-area: row/column/row/column;  行/列/行/列 */
顺序为 grid-row 的第一个值 grid-column 的第一个值  grid-row 的第二个值 grid-column 的第二个值 
```

### Grid Line 名称 使用方括号`[]` 即

> *X为横坐标,表示行;Y为纵坐标,表示列*

```CSS
grid-template-rows: [X1] 100px [X2] 100px [X3] 100px [X4] 100px [X5] 100px [X6]; 
grid-template-columns: [Y1] 100px [Y2] 100px [Y3] 100px [Y4] 100px [Y5] 100px [Y6];

grid-row: X2/ X4; /* 第二行到第四行 */
grid-column: Y1/ Y6; /* 第一列到第六列 */
```

![image-20210530001404824](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210530001404824.png)

### Grid容器内的方格称作`Grid Area`

```css
grid-template-areas:
'header header header header header'
'nav main main main main'
'nav main main main main'
'nav main main main main'
'. footer footer footer .'; /*  "." 标识忽略  忽略最左最右方格 */
/* 即 定义了四个 Grid Area 为 header nav main footer*/

grid-area: header; /*  占据 grid-template-areas 内 header 所定义的位置 */
```

![image-20210530002952416](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210530002952416.png)

```css
grid-area: header;
grid-area: nav;
grid-area: main;
grid-area: footer;
```

![image-20210530003529464](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210530003529464.png)

### row column-gap 行 列内增加间距

```css
row-gap: 10px;
column-gap: 10px;
/*  由于水平和垂直方向中间都多加了间距 则 需要要相应的增加背景宽高 */
```

![image-20210530004240910](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210530004240910.png)

### tr单位 及 repeat()函数

- `tr单位` ：
  - 专门用于Grid的`比例`单位
  - 1fr 即 占一份

```css
grid-template-rows: 100px 100px 100px 100px 100px ; 
grid-template-columns: 100px 100px 100px 100px 100px;

grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
/*  即 每个占 5 份之 1 的空间 */

如果
grid-template-rows: 3fr 1fr 1fr 1fr 1fr; /* 1fr 改为 3fr */
这时 header 的高度因权重的改变而变大 从而挤压其他元素空间
```

![image-20210530005701653](https://gitee.com/bymori/pic-go-core/raw/master/img/image-20210530005701653.png)

- `repeat()函数` ：

  - repeat(重复多少次,重复内容) 即

  ``` css
  grid-template-rows: 3fr repeat(4, 1fr);
  grid-template-columns: repeat(5, 1fr);
  ```

  - 分割数量多时 结构更加清晰
  - `!but` `repeat()` 并不适用于 `grid-template-areas`

### 布局坑&技巧

[栅格布局GRID 布局入门](https://segmentfault.com/a/1190000012310610)

[使用grid layout布局的疑问](https://segmentfault.com/q/1010000013496821?utm_source=sf-similar-question)

[[CSS] Grid 网页布局完全解构-bilibili-CodingStatup](https://www.bilibili.com/video/BV1XE41177oN?from=search&seid=6791754119944762170)

### 快速布局工具

- [快速进行 Grid 布局 - Interactive CSS Grid Generator | Layoutit Grid](https://grid.layoutit.com)
