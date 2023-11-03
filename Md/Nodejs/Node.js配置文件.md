package.json文件
package.json文件主要记录项目信息，比如项目名称，项目版本，开发者，设置脚本命令，项目协议，项目依赖包等。

初始化package.json文件

创建package.json文件
1.npm init

创建默认package.json文件
2.npm init -y

package.json常用字段
{
    项目名称
    'name':'xyl',

    项目版本
    'version':'1.0.1',
    
    项目描述
    'description':'xiangqingjieshao',
    
    默认入口服务器文件，默认是模块跟目录下的主程序index.js文件
    'main':'index.js',
    
    配置脚本命令，这样启动服务器时，可以在命令行工具输入命令npm run dev,真正执行的命令是node index.js
    'scripts':{
        'dev':'node index.js'
    },
    
    关键字,用于NPM中分类搜索
    'keywords':[
        ''        
    ],
    
    开发者
    'author':'',
    
    协议
    'license':'ISC',
    
    开发环境依赖包
    'devDependencies':{
    
    },
    
    生产环境依赖包
    'dependencies':{
    
    },


}