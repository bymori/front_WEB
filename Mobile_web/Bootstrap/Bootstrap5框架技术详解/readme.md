## Bootstrap5 框架技术详解 学习记录过程

### 快速入门
1. BS5安装与测试
   - [Bootstrap-V5官方](https://v5.bootcss.com/)
   - [Bootstrap-V5下载](https://v5.bootcss.com/docs/getting-started/download/)

   - [经过编译的 CSS 和 JS](0.assets/bootstrap-5.1.1-dist)
   - [源文件](0.assets/bootstrap-5.1.1)

2. FlexBox快速入门
   1. 开启：`display:flex;`
   2. 水平对齐：`justify-content:center;`
   3. 垂直对齐：`align-items:center;`
   4. 实例：三个div水平和垂直对齐

3. Sass入门
   - [Sass官网](http://www.sass-lang.com/)
   - [Sass中文网](https://www.sass.hk/)
   1. 安装
   2. 环境变量
   3. 编译器
   - vscode `Live Sass Compiler`
   4. 基础语法
      1. 变量
        ```scss
        $bgcolor: #555;
        $fgcolor: #cf0707;
        background-color: $bgcolor;
        color: $fgcolor;
        ```
      2. 嵌套
        ```scss
        $bgcolor: #555;
        $fgcolor: #cf0707;
        $fs: 30px;
      
        body {
          padding: 0px;
          margin: 0px;
          .main {
            background-color: $bgcolor;
            color: $fgcolor;
            font-weight: bold;
            font-size: $fs;
            width: 100px;
            height: 100px;
          }
        }
        ```
      3. 模块

         ```scss
         // _font.scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px;
         
         // index.scss
         @use 'font' as fs;
         
         body {
           padding: 0px;
           margin: 0px;
           .main {
             background-color: fs.$bgcolor;
             color: fs.$fgcolor;
             font-weight: bold;
             font-size: fs.$fs;
             width: 100px;
             height: 100px;
           }
         }
         ```

         

      4. mixins

         ```scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px;
         
         @mixin getFont($fs) {
           font-size: $fs;
         }
         body {
           padding: 0px;
           margin: 0px;
           .main {
             background-color: $bgcolor;
             color: $fgcolor;
             font-weight: bold;
             @include getFont(30px);
           }
         }
         ```

         

      5. 继承

         ```scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px;
         
         %mainext {
           background-color: $bgcolor;
           color: $fgcolor;
           font-size: $fs;
         }
         body {
           padding: 0px;
           margin: 0px;
           .main {
             font-weight: bold;
             @extend %mainext;
           }
         }
         ```

         

      6. 运算

         ```scss
         $bgcolor: #555;
         $fgcolor: #cf0707;
         $fs: 30px * 2;
         
         %mainext {
           background-color: $bgcolor;
           color: $fgcolor;
           font-size: $fs;
         }
         body {
           padding: 0px;
           margin: 0px;
           .main {
             font-weight: bold;
             @extend %mainext;
           }
         }
         ```



### 布局

#### 断点 Breakpoints

- Available breakpoints

| **Breakpoint**    | **Class infix** | Dimensions |
| ----------------- | --------------- | ---------- |
| X-Small           | *None*          | <576px     |
| Small             | sm              | ≥576px     |
| Medium            | md              | ≥768px     |
| Large             | lg              | ≥992px     |
| Extra large       | xl              | ≥1200px    |
| Extra extra large | xxl             | ≥1400px    |

- These breakpoints are customizable via Sass—you’ll find them in a Sass map in our `_variables.scss` stylesheet.

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

- 视口-viewport

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

#### 容器 Containers

Bootstrap附带三个不同的容器：

- `.container`, 它在每个响应断点处设置一个`Max-Width`
- `.container-fluid`, 所有断点均为`width：100%`
- `.container-{breakpoint}`,在指定断点之前为`width：100%`

The table below illustrates how each container’s `max-width` compares to the original `.container` and `.container-fluid` across each breakpoint.

|| Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | X-Large ≥1200px | XX-Large ≥1400px |        
| ------------------ | ------------ | ------------- | ------------ | --------------- | ---------------- | ------ |
| `.container`       | 100%         | 540px         | 720px        | 960px           | 1140px           | 1320px |
| `.container-sm`    | 100%         | 540px         | 720px        | 960px           | 1140px           | 1320px |
| `.container-md`    | 100%         | 100%          | 720px        | 960px           | 1140px           | 1320px |
| `.container-lg`    | 100%         | 100%          | 100%         | 960px           | 1140px           | 1320px |
| `.container-xl`    | 100%         | 100%          | 100%         | 100%            | 1140px           | 1320px |
| `.container-xxl`   | 100%         | 100%          | 100%         | 100%            | 100%             | 1320px |
| `.container-fluid` | 100%         | 100%          | 100%         | 100%            | 100%             | 100%   |

#### Holder 绘图插件

- https://github.com/imsky/holder
- 使用SVG在浏览器中呈现图像占位符

##### Placeholder options

占位符选项通过URL属性设置，例如 `holder.js/300x200?x=y&a=b`. 多个选项之间用 `&` 连接

- `theme`: 要用于占位符的主题。示例: `holder.js/300x200?theme=sky`
- `random`: 使用随机主题。示例: `holder.js/300x200?random=yes`
- `bg`: 背景颜色。示例： `holder.js/300x200?bg=2a2025`
- `fg`: 前景(文本)颜色。示例： `holder.js/300x200?fg=ffffff`
- `text`: 自定义文本。示例： `holder.js/300x200?text=Hello`
- `size`: 自定义文本大小。默认为`pt`单位。示例： `holder.js/300x200?size=50`
- `font`: 自定义文本字体。示例：`holder.js/300x200?font=Helvetica`
- `align`: 自定义文本对齐方式(左、右)。示例：`holder.js/300x200?align=left`
- `outline`: 为占位符绘制轮廓和对角线。示例： `holder.js/300x200?outline=yes`
- `lineWrap`: 最大线长与图像宽度比。示例：`holder.js/300x200?lineWrap=0.5`



#### 网格 Grid system

  || xs <576px             | sm ≥576px                                                    | md ≥768px  | lg ≥992px  | xl ≥1200px | xxl ≥1400px |           
| --------------------- | ------------------------------------------------------------ | ---------- | ---------- | ---------- | ----------- | ----------- |
| Container `max-width` | None (auto)                                                  | 540px      | 720px      | 960px      | 1140px      | 1320px      |
| Class prefix          | `.col-`                                                      | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-`  | `.col-xxl-` |
| # of columns          | 12                                                           |            |            |            |             |             |
| Gutter width          | 1.5rem (.75rem on left and right)                            |            |            |            |             |             |
| Custom gutters        | [Yes](https://v5.bootcss.com/docs/layout/gutters/)           |            |            |            |             |             |
| Nestable              | [Yes](https://v5.bootcss.com/docs/layout/grid/#nesting)      |            |            |            |             |             |
| Column ordering       | [Yes](https://v5.bootcss.com/docs/layout/columns/#reordering) |            |            |            |             |             |

#### 列 Columns





#### 列填充 Gutters



#### Z轴距离 Z-index

默认元素的Z-index距离

```scss
$zindex-dropdown:                   1000;
$zindex-sticky:                     1020;
$zindex-fixed:                      1030;
$zindex-offcanvas-backdrop:         1040;
$zindex-offcanvas:                  1045;
$zindex-modal-backdrop:             1050;
$zindex-modal:                      1055;
$zindex-popover:                    1070;
$zindex-tooltip:                    1080;
```





### 内容

#### 重置样式 Reboot

1. body
   1. 取消了margin:8px的默认样式
   2. background-color为#fff
2. Headings and paragraphs(H1和p标签)
   1. margin-top取消
   2. h1的margin-bottom为0.5rem
   3. p的margin-bottom为1rem
3. Lists
   1. ul、ol和dl的margin-top清除，margin- bottom为1rem
   2. 嵌套的列表的margin-bottom为0
   3. 重置了ul和ol的padding-left值
   4. description lists更新了margin
   5. dd的margin-left重置为0, 并且margin-bottom重置为0.5rem
   6. dt为粗体



#### 排版 Typography



#### 图片 Image



#### 表格 Tables

1. table结构

```html
<table class="table">
    <caption>表名</caption>
    <thead>
      表头
    </thead>
    <tbody>
      表体
    </tbody>
    <tfoot>
      表尾
    </tfoot>
  </table>
```

2. table类



#### 画像 Figure



### 表单

#### Form controls



#### Select



#### Checks and radios



#### Range



#### Input group





#### Floating labels



#### Layout



#### Validation



### 组件

#### 手风琴

