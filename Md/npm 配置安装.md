npm 配置安装

在NodeJs文件目录下建立”**node_global**“及”**node_cache**“两个文件夹；

启动cmd，依次输入下面内容来更改下载和缓存位置：

npm config set prefix "F:\Program Files\node-v8.11.1-win-x64\node_global"

npm config set cache "F:\Program Files\node-v8.11.1-win-x64\node_cache"

配置环境变量

1.右键**‘我的电脑’**依次选择**‘属性’**- ->**‘高级系统设置’**- ->**‘环境变量’**：
2.复制**nodejs**目录路径(F:\xxxxxx\nodejs安装目录)然后选中**用户变量**中的**Path**,单击’编辑’- ->’新建’- ->输入刚复制的地址 - ->确认完成。
3.复制**node_global**目录路径(F:\xxxxxx\nodejs安装目录\node_global)后选中**用户变量**中的**Path**，单击’编辑’- ->’新建’- ->输入刚复制的地址 - ->确认完成。

