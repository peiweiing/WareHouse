# FTP配置与连接服务器

### 1.在vscode中，先在扩展中安装插件ftp-sync，

![ftp配置连接服务器1](D:\知识点\images\ftp配置连接服务器1.png)

### 2.然后Ctrl+Shift+P命令，再输入ftp-sync:lnit点击确定

![ftp配置连接服务器2](D:\知识点\images\ftp配置连接服务器2.png)

### 3.进入ftp-sync.json配置文件，需要配置标红的几项

![ftp配置连接服务器3](D:\知识点\images\ftp配置连接服务器3.png)

### 4.ftp默认端口是21  sftp的默认端口是22

![ftp配置连接服务器4](D:\知识点\images\ftp配置连接服务器4.png)

### 5.接下来是导出项目到本地，快捷键调出如下界面：输入: ftp-syns:Local to Remote  然后按照下图顺序选择等待文件下载完成

![ftp配置连接服务器5-1](D:\知识点\images\ftp配置连接服务器5-1.png)

![ftp配置连接服务器5-2](D:\知识点\images\ftp配置连接服务器5-2.png)

![ftp配置连接服务器5-3](D:\知识点\images\ftp配置连接服务器5-3.png)

### 6.软件左下角可以看到执行进度

![ftp配置连接服务器6](D:\知识点\images\ftp配置连接服务器6.png)

### 7.下载完成后会出现下图选择第1个 第二个是下载文件目录 的

![ftp配置连接服务器7](D:\知识点\images\ftp配置连接服务器7.png)



### 8.然后等待，服务器的项目会逐渐下载到你所拖入的那个文件夹下最后效果如图9 后续修改代码后如果配置uploadOnSave 为true 的直接ctrl+s直接与服务器项目同步了，当然uploadOnSave设置为false的话需要手动命令同步命令是Ftp-sync：Commit

![ftp配置连接服务器8](D:\知识点\images\ftp配置连接服务器8.png)

### 9.在vs中使用，选择ftp-sync:upload file 就可以直接上传到远程站点了。

![ftp配置连接服务器9](D:\知识点\images\ftp配置连接服务器9.png)

### 10.检查是否上传成功

![ftp配置连接服务器10](D:\知识点\images\ftp配置连接服务器10.png)



**remotePath: 远程目录，默认是  ./ ,表示home目录，此目录对应于本地项目的目录，比如本地项目位于D:/work/myproject , 远程项目目录为$HOME/work/myproject, 就填写./work/myproject.**

**username: 用户名，sftp、ftp的用户名**

**password: 密码**

**protocol: 可以填写ftp和sftp，默认是ftp。**

**port： 默认是21，ftp/sftp的端口，一般ftp的默认端口是21，sftp默认端口是22.**

**ignore： 忽略同步的目录和文件。**

**debug： 默认是false，如果设置为true，可以看到通过菜单的 查看->输出 打开输出界面，看到打印，怀疑自己连接有问题的可以打开看看。**

**uploadOnSave: 默认是false，建议设置成true，这样每次修改后ctrl+s保存后会自动同步。否则就需要手动同步**

**local to Remote: 启动一个向导，把本地文件同步到远程，用于手动同步。**

**Remote to Local: 启动一个向导，用于把远程文件同步到本地。**

**Sync Current file to Remote： 同步当前窗口文件到远程机器。**

**Upload file/Folder: 上传文件、文件夹。**

**Commit: 查看本地和远程文件的差别，然后同步。**