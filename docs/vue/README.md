## 1. 初始化项目
> vw自适应，样式重置，300ms延迟，使用iconfont图标
### 1. 创建项目
```bash
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
npm install -g @vue/cli
vue create hello-world
npm run serve
```
### 2. 配置vw移动端自适应
1. 创建项目时注意选择`In dedicated config files`
```bash
需要注意的是: 询问配置 PostCSS 时需要选择的是 `In dedicated config files` 在专用配置文件中
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json
```
2. 安装vw相关包
```bash
npm i cssnano postcss-aspect-ratio-mini postcss-cssnext postcss-px-to-viewport postcss-viewport-units postcss-write-svg -S
npm i cssnano-preset-advanced -S -D
npm i postcss-import postcss-url autoprefixer -S -D
```
3. 在 postcss.config.js 中添加配置项
```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {}, 
      "postcss-write-svg": {
        utf8: false
      },
      "postcss-cssnext": {},
      "postcss-px-to-viewport": {
        viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750 
        viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置 
        unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除） 
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw 
        selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名 
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值 
        mediaQuery: false // 允许在媒体查询中转换`px` 
      }, 
      "postcss-viewport-units":{},
      "cssnano": {
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      },
  }
}
```
4. 在 index.html 中添加 script
```js
<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
<script>
    window.onload = function () {
    window.viewportUnitsBuggyfill.init({
        hacks: window.viewportUnitsBuggyfillHacks
    });
    }
</script>
```
5. 使用
### 3. 样式重置&解决1px边框&300ms延迟
1. reset.css样式重置
2. border.css解决移动端一像素边框
```bash
import './assets/style/reset.css'
import './assets/style/border.css'
```
[文件地址](https://gitee.com/chengbenchao/vue-resource)
3. 解决300ms延迟问题
- 安装
```bash
npm i fastclick --save
```
- main.js 中使用
```js
import fastClick from "fastclick"
fastClick.attach(document.body)
```
### 4. 使用iconfont图标
1. 下载
2. 将文件放置在assets-style文件夹下。
```js
iconfont.css
iconfont.eot
iconfont.svg
iconfont.ttf
iconfont.woff
```
3. 在main.js中引入
```js
//在此配置之后,全局都可以使用
import './assets/style/iconfont/iconfont.css'
```
4. 在页面中使用
```html
<span class="iconfont back">&#xe602;</span>
```