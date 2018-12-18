# Cute-cartoon-patterns

这是一个用CSS绘制的可爱卡通图案集合，包括棕熊、皮卡丘和哆啦A梦。其中棕熊是静态的图案，皮卡丘可以展示出具体的绘制过程，哆啦A梦有眨眼效果。

打开感兴趣的图案的文件夹，打开其中的`.html`文件即可看到实现效果。

涉及知识点：


#### 居中和定位

三种居中方式

- 棕熊：已知高度、宽度 + `position: relative; top/left: 50%; ` + `transform: translate(-50%, -50%)`
- 皮卡丘：外层`display: flex; justify-content/align-item: center; height: 100%` + 再内层`position: relative; width: 100%; height: 170px;`
- 哆啦A梦：已知高度、宽度 + `position: absolute; top/left/bottom/right: 0;` + `margin: auto`

其他部分的定位都通过使用`position: absolute`和具体的`left/right/top/bottom`来实现。

#### 元素、视区、浏览器、显示器大小

<div style="text-align: center">
  <img src="https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/size.jpg" width = 80% />
</div>

<img src="https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/size2.jpg" width = 80% />

哆啦A梦中眼球跟随鼠标转动的效果：

需要求得鼠标与眼球中央的距离差占整个屏幕的百分比：(鼠标离可视区`event.clientX` - 眼球这个元素可视区的偏移量`offset.x`)/(屏幕的一半宽度`window.innerWidth / 2`)

获取元素可视区的偏移量
```javascript
function getOffsetCenter(el){
  var x = el.offsetWidth / 2;
  var y = el.offsetHeight / 2;
  do{
    x += el.offsetLeft;
    y += el.offsetTop;
  } while (el = el.offsetParent);
  return { x: x, y: y }
}
```

#### 单位vh、vw

vh/vw是相对于视窗的高度/宽度

应用场景：

- 元素的尺寸限制，希望图片或者其他在一屏内显示。

<img src="https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/%E4%B8%80%E5%B1%8F%E5%9B%BE%E7%89%87.png" width = 80% />

```css
.vw_vh_img{
  max-width: 90vw;
  max-height: 90vh;
}
```
<img src="https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/%E4%B8%80%E5%B1%8F%E5%B1%95%E7%A4%BA%E8%AF%B4%E6%98%8E.png" width = 80% />

- Office Word效果：top值是动态的
实例来自于张鑫旭的关于[vh、vw的demo](https://www.zhangxinxu.com/study/201209/css3-vh-vw-office-word-effect.html)

- 画自适应的图片，如正方形
```css
.rec{
  width: 50%;
  background-color: red;
  /* padding-bottom: 50%; */
  height: 50vw;
}
```

注释去掉是另一种实现方式

#### CSS3: border-radius

不规则形状的绘制都是通过这个属性绘制的。常见的不易区分的几种边角设置：

```html
    <!--第二种是第一种的缩写还原-->
    <!--四个边角一致，水平垂直半径一致-->
    <div style="width: 300px; height: 100px; background-color: red; border-radius: 30%"></div>
    <div style="width: 300px; height: 100px; background-color: red; border-radius: 90px/30px"></div>
    <!--左上右下、左下右上边角一致，水平垂直半径一致-->
    <div style="width: 300px; height: 100px; background-color: red; border-radius: 10% 50%"></div>
    <div style="width: 300px; height: 100px; background-color: red; border-top-left-radius: 30px 10px; border-top-right-radius: 150px 50px; border-bottom-left-radius: 150px 50px; border-bottom-right-radius: 30px 10px;"></div>
    <!--四个边角一致，水平垂直不一致-->
    <div style="width: 300px; height: 100px; background-color: red; border-radius: 10%/50%"></div>
    <div style="width: 300px; height: 100px; background-color: red; border-top-left-radius: 30px 50px; border-top-right-radius: 30px 50px; border-bottom-left-radius: 30px 50px; border-bottom-right-radius: 30px 50px;"></div>
```
效果图：

<img src="https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/border-radius.png" width = 20% />

#### 伪元素：一个元素的子元素

##### 好处：

- 简化页面html标签，使页面更加简洁优雅
- 制造视觉上的效果，且不会增加JS查DOM的负担，影响效率
- 可以加快浏览器加载html文件，对SEO也有帮助

##### 注意

- 是inline行内元素
- 无法用js获取
- img/input等单标签没有before/after伪元素，因为本身没有子元素

##### 适用

- 画无关紧要的分割线、点之类的小元素，否则要添加span标签
- 清除浮动
```css
.clearfix::after{
  content: '';
  display: table;
  clear: both;
}
```
- 制作特殊效果：展示文字

[参考材料](https://www.yinchengli.com/2016/10/30/using-before-after/)

#### HTML5: pre

> 表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。

#### 关键帧与动画

```css
@keyframes eye-close{
  0%, 3%, 6%, 100%{
    height: 100%
  }
  1.5%, 4.5%{
    height: 5%
  }
}
.eye{
  ...
  animation: eye-close 6s 5s infinite;/*第一个时间是持续时间，第二个是延迟时间*/
}
```

#### setTimeout模仿setInterval

实现皮卡丘的绘制过程，让代码一点一点展示出来
```javascript
function writeCode(code, fn){
  let container = document.querySelector('#code');
  let styleTag = document.querySelector('#styleTag');
  let n = 0, id;
  id = setTimeout(function run(){
    n += 1;
    container.innerHTML = code.substring(0, n);
    styleTag.innerHTML = code.substring(0, n);
    container.scrollTop = container.scrollHeight;
    if(n < code.length){
      id = setTimeout(run, duration);
    } else {
      fn & fn.call();
    }
  }, duration);
}
```

#### CSS属性书写顺序

方便自己及其他人的阅读理解，代码更加简洁

> 
- 显示方法 & 布局
- 定位
- 盒模型框
  - 外边距
  - 边框
  - 内边距
- 尺寸
- 文本样式
  - 字体
  - 文本
  - 文字颜色
- 背景
- 轮廓
- 透明度 & 阴影
- 动效
  - 过渡
  - 转换变形
  - 动画
- 其他
  - 伪类 & 伪元素
  - 引用
  - 媒体查询

来自于AlloyTeam的[CSS属性顺序列表](http://alloyteam.github.io/CodeGuide/#css-declaration-order)
```css
[
  [
    "display",
    "visibility",
    "float",
    "clear",
    "overflow",
    "overflow-x",
    "overflow-y",
    "clip",
    "zoom"
  ],
  [
    "table-layout",
    "empty-cells",
    "caption-side",
    "border-spacing",
    "border-collapse",
    "list-style",
    "list-style-position",
    "list-style-type",
    "list-style-image"
  ],
  [
    "position",
    "top",
    "right",
    "bottom",
    "left",
    "z-index"
  ],
  [
    "margin",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    "box-sizing",
    "border",
    "border-width",
    "border-style",
    "border-color",
    "border-top",
    "border-top-width",
    "border-top-style",
    "border-top-color",
    "border-right",
    "border-right-width",
    "border-right-style",
    "border-right-color",
    "border-bottom",
    "border-bottom-width",
    "border-bottom-style",
    "border-bottom-color",
    "border-left",
    "border-left-width",
    "border-left-style",
    "border-left-color",
    "border-radius",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-right-radius",
    "border-bottom-left-radius",
    "border-image",
    "border-image-source",
    "border-image-slice",
    "border-image-width",
    "border-image-outset",
    "border-image-repeat",
    "padding",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height"
  ],
  [
    "font",
    "font-family",
    "font-size",
    "font-weight",
    "font-style",
    "font-variant",
    "font-size-adjust",
    "font-stretch",
    "font-effect",
    "font-emphasize",
    "font-emphasize-position",
    "font-emphasize-style",
    "font-smooth",
    "line-height",
    "text-align",
    "text-align-last",
    "vertical-align",
    "white-space",
    "text-decoration",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-style",
    "text-emphasis-position",
    "text-indent",
    "text-justify",
    "letter-spacing",
    "word-spacing",
    "text-outline",
    "text-transform",
    "text-wrap",
    "text-overflow",
    "text-overflow-ellipsis",
    "text-overflow-mode",
    "word-wrap",
    "word-break"
  ],
  [
    "color",
    "background",
    "background-color",
    "background-image",
    "background-repeat",
    "background-attachment",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-clip",
    "background-origin",
    "background-size"
  ],
  [
    "outline",
    "outline-width",
    "outline-style",
    "outline-color",
    "outline-offset",
    "opacity",
    "box-shadow",
    "text-shadow"
  ],
  [
    "transition",
    "transition-delay",
    "transition-timing-function",
    "transition-duration",
    "transition-property",
    "transform",
    "transform-origin",
    "animation",
    "animation-name",
    "animation-duration",
    "animation-play-state",
    "animation-timing-function",
    "animation-delay",
    "animation-iteration-count",
    "animation-direction"
  ],
  [
    "content",
    "quotes",
    "counter-reset",
    "counter-increment",
    "resize",
    "cursor",
    "user-select",
    "nav-index",
    "nav-up",
    "nav-right",
    "nav-down",
    "nav-left",
    "tab-size",
    "hyphens",
    "pointer-events"
  ]
]
```
