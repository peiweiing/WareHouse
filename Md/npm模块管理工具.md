npm模块管理工具

npm install	安装环境依赖

npm install xxx	安装模块到当前目录

npm install xxx -g	安装模块在全局作用域

npm uninstall xxx/npm uninstall xxx -g	卸载模块

npm install xxx@2.0	安装指定的2.0版本号的模块

npm view xxx > xxx.version.txt	生成模块的历史版本信息



cnpm模块管理工具

安装cnpm（淘宝镜像）

npm install cnpm -g	安装淘宝镜像到全局

cnpm install zepto	安装移动端JavaScript库

npm install nrm -g	安装切源工具到全局

nrm ls	查看当前可用的源

nrm use xxx	使用某个源



yarn模块管理工具

安装yarn

npm install yarn -g	安装yarn模块到全局

yarn add xxx	安装xxx模块到当前目录

yarn remove xxx	卸载xxx模块

使用yarn只能把模块安装到当前目录下，不能安装到全局环境

package.json文件中的“scripts”里面的内容是执行当前文件，可以自己配置脚本文件：
	如“scripts”：{
		“rc”：“node index.js”
	}//在终端运行yarn rc；或运行npm run rc即可执行

