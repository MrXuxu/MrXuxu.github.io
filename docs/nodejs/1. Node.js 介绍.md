## 1. Node.js 介绍
### 1. Node.js是什么

- 不是一门语言
- 不是库，不是框架
- Node.js是一个javaScript运行时环境
- 简单点来讲就是Node.js可以解析和执行JavaScript代码
- 以前只有浏览器可以解析执行JavaScript代码
- 也就是说现在JavaScript可以完全脱离浏览器来运行

### 2. 浏览器中的JavaScript

- EcmaScript
- DOM
- BOM

### 3. Node.js中的JavaScript

- EcmaScript
- 没有DOM和BOM
- 在Node这个JavaScript执行环境中为JavaScript提供了一些服务器级别的操作API
  - 例如文件读写
  - 网络服务的构建
  - 网络通信
  - http服务器
  - 等处理。。。

### 4. 构建在Chrome的V8引擎之上

- 代码只是具有特定格式的字符串而已
- 引擎可以认识它，引擎可以帮你去解析和执行
- Google Chrome的V8引擎是目前公认的解析执行JavaScript代码最快的
- Node.js的作者把Google Chrome中的V8引擎移植了出来，开发了一个独立的引擎

### 5. 特点

- 事件驱动
- 非阻塞IO模型（异步）
- 轻量和高效
- Node.js package ecosystem(npm)
  - npm 是世界上最大的开源库生态系统
  - 绝大多数JavaScript相关的包都存放在npm上，这样做的目的是为了让开发人员更方便的去下载使用

### 6. Node.js能做什么

- Web服务器后台
- 命令行工具
  - npm(node)
  - git(c语言)
  - hexo(node)
  - ...
- 对于前端开发工程师来说，接触node最多的是它的命令行工具
  - 自己写的很少，主要是使用别人第三方的
  - webpack
  - gulp
  - npm

### 7. Node.js中能学到啥

- B/S编程模型
  - Browser-Server
  - back-end
  - 任何服务端技术这种BS编程模型都是一样，和语言无关
  - Node只是作为我们学习BS编程模型的一个工具而已
- 模块化编程
  - RequireJS
  - SeaJS
  - `@import('文件路径')`
  - 以前认知的JavaScript只能通过script标签来加载
  - 在Node中可以像`@import`一样引用加载js脚本文件
- Node常用API
- 异步编程
  - 回调函数
  - Promise
  - async
  - generator
- Express Web开发框架
- EcmaScript 6 