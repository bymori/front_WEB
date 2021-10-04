### css初始化

[Normalize.css](http://necolas.github.io/normalize.css/)

### 盒模型

- 传统模式宽度计算：盒子的宽度 = CSS中设置的 width + border + padding
- CSS3盒子模型：盒子的宽度 = CSS中设置的宽度width里面包含了border和padding

也就是说，我们的CSS3中的盒子模型，padding和border不会撑大盒子了

```css
/* css3盒子模型 */
box-sizing: border-box;
/* 传统盒子模型 */
box-sizing: content-box;
```

### 特殊样式

```css
/* css3盒子模型 */
box-sizing: border-box;
-webkit-box-sizing: border-box;
/*点击高亮我们需要清除清除 设置为transparent完成透明*/
-webkit-tap-highlight-color: transparent;
/*在移动端浏览器默认的外观在ios.上加上这个属性才能给按钮和输入框自定义样式*/
-webkit-appearance: none;
/*禁用长按页面时的弹出菜单*/
-webkit-touch-callout: none;
```

## 常见布局样式

### 单独制作移动端页面

- [流式布局（百分比布局）](移动端布局/JDH5/index.html)
- flex弹性布局（强烈推荐）
- less+rem+媒体查询布局
- 混合布局

### 响应式页面兼容移动端

- 媒体查询
- Bootstrap

### 流式布局（百分比布局）

- 流式布局，就是百分比布局，也称非固定像素布局。
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。
- 流式布局方式是移动web开发使用的比较常见的布局方式
- max-width 最大宽度(max-height最大高度)
- min-width 最小宽度(min-height最小高度)

```css
width: 100%;
max-width: 980px;
min-width: 320px;
```

### flex弹性布局

### rem适配布局

#### rem单位

- rem (root em)是一个相对单位，类似于em,em是父元素字体大小。
- 不同的是`rem`的基准是相对于html元素的`字体大小`。
- 比如，根元素(html)设置font-size=12px;非根元素设置width:2rem;则换成px表示就是24px。

#### 媒体查询

> 媒体查询(**Media Query**)是CSS3新语法。

- 使用`@media`查询，可以针对不同的媒体类型定义不同的样式
- `@media可以针对不同的屏幕尺寸设置不同的样式`
- 当你重置浏览器大小的过程中，页面也会会根据浏览器的宽度和高度重新渲染页面
- 目前针对很多苹果手机、Android手机， 平板等设备都用得到多媒体查询

#### 语法
```css
@media mediatype and|not|only (media feature) {
    CSS-Code
}
```
- 用@media开头注意@符号
- mediatype媒体类型
- 关键字and not only
- media feature媒体特性 必须有小括号包含

### [rem适配方案](rem布局/suningH5/index.html)

**元素大小取值方法**

- 最后的公式：页面元素的rem值 = 页面元素值(px) / (屏幕宽度/划分的份数)
- 屏幕宽度/划分的份数就是html font-size的大小
- 或者：页面元素的rem值 = 页面元素值("px)/html font-size字体大小

### [rem适配方案2-flexible.js](rem布局/suningflexible/index.html)

### 响应式布局


### vw和vh

1. 移动端布局
- 移动端布局---flex布局
- 为了实现可以适配移动端，页面元素可以宽度和高度等比例缩放
- 需要移动端适配有如下方案：

#### rem

市场比较常见：

1. 需要不断修改html文字大小
2. 需要媒体查询media
3. 需要flexible.js

#### vw / vh

将来（马上）趋势
1.省去各种判断和修改
代表：
b站。。

### vw / vh是什么

- vw/vh是一个相对单位(类似em和rem相对单位)
  - vw是：`v`iewport `w`idth 视口宽度单位
  - vh是：`v`iewport `h`eight 视口高度单位
- 相对视口的尺寸计算结果
  - 1vw=1/100视口宽度
  - 1vh=1/100视口高度

> 例如：
> 当前屏幕视口是375像素，则1vw就是3.75像素 如果当前屏幕视口为414,则1vw就是4.14像素

#### 注意

和百分比有区别的，百分比是相对于父元素来说的，而vw和vh总是针对于当前视口来说的。


#### vw注意事项

- 因为设计到大量除法，还是适应LESS搭配更好点。
- 我们本质是根据视口宽度来等比例缩，放页面元素高度和宽度的，所以开发中使用vw就基本够用了。vh很少使用
- 兼容性：网站：[https://caniuse.com/](https://caniuse.com/)

#### Easy LESS自动保存css指定位置

vscode-->拓展-->Easy LESS-->拓展设置-->配置settings.json

```json
"less.compile": {
  "compress": true, // true => 删除多余的空格
  "sourceMap": true, // true => 生成源映射(.css.map文件)
  //"out": true // false => 不输出.css文件(可覆盖每个文下所示)
  "out": "../css/",//设置导出css路径 行对路径
},
```

#### 按照px转换vw的小插件

- px2vw
- Px2xx

### Bootstrap