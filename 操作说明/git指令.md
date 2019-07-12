git文件状态：

1. untracked	文件没有被追踪
2. Modified          工作区修改了某个文件但没有添加到暂存区
3. Staged               表示把工作区修改的文件添加到了暂存区但没有提交到版本库
4. Committed        数据被安全的存储在本地库中

git三层结构：

1. 工作区（working directory）
2. 暂存区（staging index）
3. 版本库（git directory）

git bash {打开}

git --version {查看版本表明安装成功}

git config --global user.name "Your Name"{用户名，--global参数指令表示这台机器上所有的git仓库都会使用这个配置}

git config --global user.email "email@example.com"{邮箱，--global参数指令表示这台机器上所有的git仓库都会使用这个配置}

git config --list{查看已经配置好的用户名和邮箱}

ls -a {查看当前文件夹下的内容}

git init {让git管理新建文件夹}

git status {查看本地工作区的文件状态（工作区指写代码的地方）（红色意思当前文件没有被GIT所管理）}

git add xxx文件名 {就是让git来管理当前内容}

git add . {圆点的作用是管理所有内容} 

git commit -m "提交注释" {把内容提交到版本库}

git commit -am "提交注释" {当前文件之前被修改过，此操作是git add和git commit -m 的组合}



git log {查看版本库的历史提交信息}

git commit --amend{重新提交最后一次提交操作，修改后先按下esc，再按下:wq推出操作}

git checkout -- "文件名"{拉取暂存区的文件将其替换工作区的文件}

git checkout -- . {拉取暂存区的文件将其替换工作区的全部修改}

git reset "commitid" {从版本库的历史提交信息中拉取“commit”的id值，来恢复到该历史信息}

mv "旧文件名" "新文件名"{修改文件名}

git rm --cached "文件名" {会将文件从缓存区删除}

git branch {查看分支，必须是提交到版本库的项目}

git branch 分支名字{创建新的分支}

git checkout 分支名字{在各分支间切换}

git checkout -b 分支名字{创建分支，并切换到分支}

git branch -D 分支名字{删除分支，（不能删除分支自己，需要切换到其他分支才能删除）}

git branch -m 分支名字{重命名分支}

git merge dev {把dev分支的工作成果合并到master分支上，返回到master分支中（合并后可以删除dev分支，继续开发了 git branch -D dev）}

没有$符号的时候，输入大写Q解决问题