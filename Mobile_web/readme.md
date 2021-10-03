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
