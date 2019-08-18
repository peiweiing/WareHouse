## BootStrap响应式布局

**使用 BootCDN 提供的免费 CDN 加速服务（同时支持 http 和 https 协议）**

在以下代码中将href指向地址的css文件与js文件打开并全选复制到本地新建的文件中

```
<!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- 可选的 Bootstrap 主题文件（一般不用引入） -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

**通过Bower进行安装**

通过 [Bower](http://bower.io/) 安装并管理 Bootstrap 的 Less、CSS、JavaScript 和字体文件

```bash
$ bower install bootstrap
```

**通过npm进行安装**

`require('bootstrap')` 代码的作用是加载 Bootstrap 的所有 jQuery 插件。其中，`bootstrap` 模块自身并不导出任何内容。你可以通过加载安装包顶级目录下的 `/js/*.js` 文件的方式手动加载单个的 Bootstrap 插件。

Bootstrap 的 `package.json` 文件包含了一些额外的元数据：

- `less` - Bootstrap 源码的入口 [Less](http://lesscss.org/) 文件的路径
- `style` - Bootstrap 的未压缩 CSS 文件的路径

```bash
$ npm install bootstrap@3
```

**通过 Composer 进行安装**

Bootstrap 安装包，其中包括 Less、CSS、JavaScript 和 fonts 文件

```bash
$ composer require twbs/bootstrap
```

##  引入页面使用方法-基本模板

**使用以下给出的这份超级简单的 HTML 模版，或者修改[这些实例](https://v3.bootcss.com/getting-started/#examples)。我们强烈建议你对这些实例按照自己的需求进行修改，而不要简单的复制、粘贴。**

以下引入为链接地址，可以npm下载后本地引入

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>标题Bootstrap</title>

    <!-- Bootstrap （Bottstrap 的链接地址css文件）可以用npm下载后本地引入-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```



## 编译 Less/Sass 源码需要注意的事项

Bootstrap 利用 [Autoprefixer](https://github.com/postcss/autoprefixer) 自动为 [某些 CSS 属性添加针对特定厂商的前缀](http://webdesign.about.com/od/css/a/css-vendor-prefixes.htm)。如果你是从 Less/Sass 源码编译 Bootstrap 的，并且没有使用 Bootstrap 自带的 Gruntfile 文件，那你就必须将 Autoprefixer 集成到你的编译工具和编译过程中。如果你使用的是我们预先编译好的 Bootstrap 文件或者使用的是我们提供的 Gruntfile 文件，那就无需操心了，我们已经将这些工作替你搞定了。

# 编译 CSS 和 JavaScript 文件

Bootstrap 使用 [Grunt](http://gruntjs.com/) 作为编译系统，并且对外提供了一些方便的方法用于编译整个框架。下面讲解的就是如何编译源码、运行测试用例等内容。

##  安装 Grunt

安装 Grunt 前，你需要**首先下载并安装 node.js** （npm 已经包含在内）。npm 是 [node packaged modules](https://www.npmjs.com/) 的简称，它的作用是基于 node.js 管理扩展包之间的依赖关系。

然后在命令行中输入以下命令：

1. 在全局环境中安装 `grunt-cli` ：`npm install -g grunt-cli` 。
2. 进入 `/bootstrap/` 根目录，然后执行 `npm install` 命令。npm 将读取 [`package.json`](https://github.com/twbs/bootstrap/blob/master/package.json) 文件并自动安装此文件中列出的所有被依赖的扩展包。

上述步骤完成后，你就可以运行 Bootstrap 所提供的各个 Grunt 命令了。

##  可用的 Grunt 命令

### `grunt dist` （仅编译 CSS 和 JavaScript 文件）

重新生成 `/dist/` 目录，并将编译压缩后的 CSS 和 JavaScript 文件放入这个目录中。作为一名 Bootstrap 用户，大部分情况下你只需要执行这一个命令。

### `grunt watch` （监测文件的改变，并运行指定的 Grunt 任务）

监测 Less 源码文件的改变，并自动重新将其编译为 CSS 文件。

### `grunt test` （运行测试用例）

在 [PhantomJS](http://phantomjs.org/) 环境中运行 [JSHint](http://jshint.com/) 和 [QUnit](http://qunitjs.com/) 自动化测试用例。

### `grunt docs` （编译并测试文档中的资源文件）

编译并测试 CSS、JavaScript 和其他资源文件。在本地环境下通过 `bundle exec jekyll serve` 运行 Bootstrap 文档时需要用到这些资源文件。

### `grunt` （重新构建所有内容并运行测试用例）

编译并压缩 CSS 和 JavaScript 文件、构建文档站点、对文档做 HTML5 校验、重新生成定制工具所需的资源文件等，都需要 [Jekyll](http://jekyllrb.com/docs/installation/) 工具。这些只有在你对 Bootstrap 深度研究时才有用。

##  除错

如果你在安装依赖包或者运行 Grunt 命令时遇到了问题，请首先删除 npm 自动生成的 `/node_modules/` 目录，然后，再次运行 `npm install` 命令。

