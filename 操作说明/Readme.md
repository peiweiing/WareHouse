web开发者平台：https://github.com/peiweiing

Git基础命令


1.连接github

 ssh-keygen -t rsa -C "注册的github的邮箱"
	一路回车就好

 打开用户主目录：C:\Users\用户名\.ssh
	里面存在两个文件：id_rsa  id_rsa.pub

 打开github -> settings -> SSH and GPG keys -> New SSH key -> title任意填写 、key里面填id_rsa.pub
 的内容
2. 第一次提交数据
    找到需要上传文件的目录，执行
     git init
     输入下面的命令进行配置
     git config --global user.email "you@example.com"
     git config --global user.name "Your Name"

 然后执行下面的命令
 git add *  将当前目录的所有文件全部添加到临时区
 git commit -m "提交声明"    将数据添加到本地仓库
 git remote add origin https://github.com/peiweiing/gittest.git  连接设置的仓库
 git push -u origin master 将本地数据提交到远程仓库


  3. 第二次提交数据
     git add * 
      git commit -m "提交数据的备注"
      git push origin master 

 

  4. 本地数据删除
     本地数据删除，但是远程仓库文件还在，如果想要把本地的修改提交到远程仓库，需要进行下面的操作
      git rm 删除的文件
      git commit -m "提交数据的备注"
      git push origin master 

 如果删除数据后如果后悔了，可以直接恢复过来
 git checkout -- 删除的文件    这样就能够直接恢复过来

  5. 如果换了位置，想要把远程仓库的文件下载下来，
     可以进行如下操作：

 git init 
 git remote add origin https://github.com/peiweiing/xxxxx.git
 git pull origin master

 

tip：查看连接状态：git remote -v

.拉数据
   git remote add origin 'https://github.com/peiweiing/TeamWork.git'
 	

.推新数据
   echo "222" > xxxx.txt
   git status
   git add .
   git commit -m'xxxxaaa'
   git push origin master