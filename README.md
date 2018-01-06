# react-watermark-module

React水印组件，支持图片水印，文字水印。

### 安装

```npm
npm i --save react-watermark-module
```

### 文字水印

1、支持左上、左下、右上、右下、居中等位置

2、支持任意位置

3、多行文字（暂不支持）

**简易API**
```javascript
<ReactWatermark
    imagePath={} //必须，对象，背景图片
    textData={'红掌拨清波'} //必须，字符串，水印内容
    type={'text'} //必须，水印类型
/>
```

**所有API**
```javascript
<ReactWatermark
    ID={'watermark'} //非必须，字符串，id
    color={'#f00'} //非必须，字符串，水印颜色
    font={'28px serif'} //非必须，字符串，水印字号、字体
    imagePath={} //必须，对象，背景图片
    textData={'红掌拨清波'} //必须，字符串，水印内容
    textPosition={[100, 40]} //水印位置，默认右下角，支持字符串：leftTop、leftBottom、rightTop、rightBottom、center，也支持自定义位置，用数组表示 [x, y]
    transparent={0.4} //非必须，文字透明度
    type={'text'} //必须，水印类型
/>
```

### 图片水印

1、支持左上、左下、右上、右下、居中等位置

2、支持任意位置

3、多个logo水印（暂不支持）

当type是logo时，对文字水印的字体设置无效，请不要混淆。

**简易API**
```javascript
<ReactWatermark
    imagePath={} //必须，对象，背景图片
    logoPath={} //必须，logo水印的路径，用require或import导入
    type={'logo'} //必须，水印类型
/>
```

**所有API**
```javascript
<ReactWatermark
    ID={'watermark'} //非必须，字符串，id
    imagePath={} //必须，对象，背景图片
    logoPath={} //必须，logo水印的路径，用require或import导入
    textPosition={[100, 40]} //水印位置，默认右下角，支持字符串：leftTop、leftBottom、rightTop、rightBottom、center，也支持自定义位置，用数组表示 [x, y]
    transparent={0.4} //非必须，logo透明度
    type={'logo'} //必须，水印类型
/>
```

### 疑问

插件目前只支持单文本和单logo水印，后续有多文本和多logo水印，以及更多新的功能，也欢迎你参与项目的迭代。