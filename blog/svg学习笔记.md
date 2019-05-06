SVG(Scalable Vector Graphics)**可缩放矢量图** 是一种使用 XML 描述 2D 图形的语言。<br>
SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。<br>
在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。<br>
#### svg的一些优势：
* SVG 可被非常多的工具读取和修改（比如记事本）
* SVG 与 JPEG 和 GIF 图像比起来，尺寸更小，且可压缩性更强。
* SVG 是可伸缩的
* SVG 图像可在任何的分辨率下被高质量地打印
* SVG 可在图像质量不下降的情况下被放大
* SVG 图像中的文本是可选的，同时也是可搜索的（很适合制作地图）
* SVG 可以与 Java 技术一起运行
* SVG 是开放的标准
* SVG 文件是纯粹的 XML
#### svg可通过`<object>,<embed>,<iframe>`标签引入html中。

#### 图形绘制中的一些tips
* 显示层次由标签自上至下顺序指定
* stroke-dasharray:  虚线定义  显示隐藏像素数循环
* rect的弧度  由rx,ry指定   如果存在一个值未定义  则默和已存在的值相等。
* X1,y1 x2,y2作为点位置的书写方式
#### SVG通过视窗、视野控制svg的显示
* 视窗由svg的width,height控制 视野有viewBox属性控制
* 视窗是html引入svg的显示大小。视野是svg上会被显示的的区域。先通过视野获取显示内容，再缩放适配到视窗。
* 默认视窗的大小是300px、150px
* viewBox 注意**B**大写。否则无效
* 如果不指定视窗尺寸 但指定viewBox视野  则默认填充
* 视窗，视野都指定并且成比例。则经过缩放直接适配。如果二者不等比例。则需要preserveAspectRatio属性来确定填充策略。<br>
preserveAspectRatio

| 第二个参数 | 描述 | 
| :-: | :-:|
| meet（默认） |保持长宽比,整个viewBox在viewport中可见； 图形往往缩小  | 
| slice | 保持长宽比,viewBox覆盖viewport的全部区域； 图形往往放大 | 
| none |不在保持长宽比，直接拉伸缩放，但如果第一个参数存在则无效 | 

当第二个参数选择meet/slice时 就会出现某个方向未被填满，或者溢出的情况需要设置x,y方向的对齐策略
| 第一个参数 | 描述 | 
| :-: | :-:|
| xMin/xMid/xMax |x方向左对齐，居中对齐，右对齐  | 
| YMin/YMid/YMax（**Y**大写） | y方向左对齐，居中对齐，右对齐 | 
两行组合在一起x在前，y在后组成第一个参数
![meet,slice,x,y对齐效果演示](https://user-gold-cdn.xitu.io/2019/5/5/16a83c40349ecd5f?w=1053&h=464&f=png&s=9335)
黑色矩形为视野，虚线矩形为视窗
#### 渐变
##### 线性渐变
```xml
<defs>
    <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1"/>
        <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1"/>
    </linearGradient>
</defs>
<ellipse cx="200" cy="190" rx="85" ry="55"
style="fill:url(#orange_red)"/>
</svg>
```
* 渐变方式独立定义 
* x1,y1,x2,y2描述渐变方向 
* 如果offset如果出现逆序 例如：50% green,30% red   30%会变为50%  圆滑过度的绿色的另一半变成红色。并且有明显的红绿分隔线。
##### 放射渐变
cx,cy	径向渐变的中心点X和Y坐标。它的值使用用填充的百分比值。如果没有定义则默认值为50% <br>
fx, fy	径向渐变的焦点X和Y值。它的值使用用填充的百分比值。如果没有定义则默认值为50%。 <br>
注意：在Firefox 3.05中如果值低于5%可能会发生问题。<br>
**径向渐变的聚焦点是颜色辐射的角度。**你可以将径向渐变想象为一盏灯，那么聚焦点决定灯光从什么方向“照射”在图形上。50%,50%表示在图形的正上方，
r	径向渐变的半径
#### 变换
类似于css tranform语法 可以线性叠加
