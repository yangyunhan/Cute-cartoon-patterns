# Cute-cartoon-patterns

这是一个用CSS绘制的可爱卡通图案集合
包括棕熊、皮卡丘和哆啦A梦。其中棕熊是静态的图案，皮卡丘可以展示出具体的绘制过程，哆啦A梦有眨眼效果。

打开感兴趣的图案的文件夹，打开其中的`.html`文件即可看到实现效果。

涉及知识点：

- 居中和定位

三种居中方式
棕熊：已知高度、宽度 + `position: relative; top/left: 50%; ` + `transform: translate(-50%, -50%)`
皮卡丘：外层`display: flex; justify-content/align-item: center; height: 100%` + 再内层`position: relative; width: 100%; height: 170px;`
哆啦A梦：已知高度、宽度 + `position: absolute; top/left/bottom/right: 0;` + `margin: auto`

- 元素、视区、浏览器、显示器大小

![](https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/size.jpg = 80%)
![](https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/size2.jpg)

- 单位vh、vw
vh/vw是相对于视窗的高度/宽度
只有vh/vw才能完成的应用场景：
1) 元素的尺寸限制，希望图片或者其他在一屏内显示。

![](https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/%E4%B8%80%E5%B1%8F%E5%9B%BE%E7%89%87.png)
![](https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/%E4%B8%80%E5%B1%8F%E5%86%85%E5%9B%BE%E7%89%872.png)

```css
.vw_vh_img{
  max-width: 90vw;
  max-height: 90vh;
}
```
![](https://github.com/yangyunhan/Cute-cartoon-patterns/blob/master/%E4%B8%80%E5%B1%8F%E5%B1%95%E7%A4%BA%E8%AF%B4%E6%98%8E.png)

2) Office Word效果：top值是动态的
实例来自于张鑫旭的关于[vh、vw的demo](https://www.zhangxinxu.com/study/201209/css3-vh-vw-office-word-effect.html)

3) 画自适应的图片，如正方形
```css
.rec{
  width: 50%;
  background-color: red;
  /* padding-bottom: 50%; */
  height: 50vw;
}
```
注释去掉是另一种实现方式

