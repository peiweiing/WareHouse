npm模块管理工具：以下XXX代表某个模块

npm init	生成当前配置文件package.json文件

npm init -y	生成当前配置文件默认的package.json文件

npm install	安装环境依赖，针对目录信息自动安装所需模块

npm install xxx	安装模块到当前项目目录下

npm install xxx -g	安装模块在全局作用域，具体安装的磁盘位置，要看npm config prefix的位置。

npm install xxx -save	安装模块到项目目录下，并添加到配置依赖中（package.json的dependencies属性）

npm install xxx -save-dev	安装模块到项目目录下，并添加到配置依赖中（package.json的devDependencies属性）



npm docs xxx	查看该模块的文档

npm root -g	查看全局安装包路径

npm comfig set prefix "路径"	修改全局包安装路径

npm list	查看当前目录下安装的所有模块

npm list -g	查看全局包的安装路径下所有模块

npm uninstall xxx	卸载当前目录下某个模块

npm uninstall xxx -g	卸载全局安装路径下的某个模块

npm update xxx	更新当前目录下某个模块

npm install xxx@2.0	安装指定的2.0版本号的模块

npm view xxx > xxx.version.txt	生成模块的历史版本信息



查看npm的registry配置地址：	npm config get registry

更改npm的registry配置地址为淘宝镜像地址指令：	npm config set registry https://registry.npm.taobao.org/

更改npm的registry配置地址为官方地址指令：	npm config set registry https://registry.npmjs.org/







cnpm模块管理工具

安装cnpm（淘宝镜像）

npm install cnpm -g	安装淘宝镜像到全局

cnpm install zepto	安装移动端JavaScript库

cnpm -v	查看版本号

npm install nrm -g	安装切源工具到全局

nrm ls	查看当前可用的源

nrm use xxx	使用某个源



yarn模块管理工具

安装yarn

npm install yarn -g	安装yarn模块到全局

yarn add xxx	安装xxx模块到当前目录

yarn -v	查看版本号

yarn remove xxx	卸载xxx模块

使用yarn只能把模块安装到当前目录下，不能安装到全局环境

package.json文件中的“scripts”里面的内容是执行当前文件，可以自己配置脚本文件：
	如“scripts”：{
		“rc”：“node index.js”
	}//在终端运行yarn rc；或运行npm run rc即可执行

