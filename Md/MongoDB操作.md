## **1mongodb操作**

\1. 一切的mogodb操作要进入到安装路径下的bin文件夹（没有配置环境变量如果配置的话就不用进入到bin当中）

\2. 一切的操作都要先连接 mongo localhost:27017 回车

\3. 查看数据库 show databases (默认情况下 admin 和 local)

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps16C.tmp.jpg) 

\4. 新建或者切换（如果有就切换如果没有就新建）  use “库名字”

切换已经有的库![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps16D.tmp.jpg)

 

 

新建库

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps17E.tmp.jpg) 

因为没有集合不现实当前新建的数据库 所以新建集合   db.createCollection(“集合名字”)

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps17F.tmp.jpg) 

大家会发现当新建成功后  在查看库  cs库就显示出来了

 

删除

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps18F.tmp.jpg) 

 

 

 

 

查看指定库当中的集合

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps190.tmp.jpg) 

 

删除集合的操作（删除需谨慎   删除毁一生）

db.删除的集合名.drop()

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps191.tmp.jpg) 

 

 

##  

## **开始增删改查**

新增

db.集合的名字.insert({“k”:”v”,```````````})

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps192.tmp.jpg) 

新增操作的时候没有添加_id这个内容但是如果没有添加  那么系统会自动给我们添加一个id标识 （标识唯一的意思）

其实也可以手工指定(这样子i据可以让当前的id更加如何我们的实际要求)![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1A3.tmp.jpg) 注意：_id这个唯一标识  使用insert插入的时候不能出现重复 如果出现不能正常的插入

 

如果我就是向重复怎么办？不可能

只能给重读的id 进行修改操作（替换掉）

Db.集合名.save()

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1A4.tmp.jpg) 

 

如果向一次插入多条？

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1A5.tmp.jpg) 

 

 

查询

db.集合的名字.find()

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1A6.tmp.jpg) 

 

条件查询

Db.集合名字.find({k:v})

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1B7.tmp.jpg) 

使用上面的方式来进行查询的时候  会把当前这条信息中的所有内容都查询出来

 

条件查询  更具多个条件查询内容

Db.集合名字.find({k:v,k:v,k:v,k:v})

 

db.[collection名称].find().pretty();//格式化查询使得查询出来的数据在命令行中更加美观的显示(有显示格式的优化)，不至于太紧凑

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1B8.tmp.jpg) 

 

问题 如果我只想显示title怎么办？

 

给find（）查询加入第二个参数代表的就是  控制查询内容   1需要显示  0 不显示

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1B9.tmp.jpg) 

 

高级查询

Db.集合的名字.find({key:{$xxx:val}})

 

大于$gt  小于$lt  大于等于$gte  小于等于$lte  不等于$ne

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1BA.tmp.jpg) 

 

 

And查询 

 

Db.集合.find({key：val,key:val})

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1BB.tmp.jpg)   

or查询

Db.集合名.find( { $or: [ {key:val},{key:val} ] } )

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1CB.tmp.jpg) 

 

排序

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1CC.tmp.jpg) 

 

 

Limit

显示结果集（结果的集合）中指定数量的内容

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1CD.tmp.jpg) 

 

Skip

 跳过结果集中指定条数的数据 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1CE.tmp.jpg) 

 

 

 

查询数量

 

.count()   返回结果集中的数量

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1DF.tmp.jpg) 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1E0.tmp.jpg) 

 

 

 

修改  

 

db.collection.update(

   {<query>},//要修改的内容

   {$set:{<update>}},//修改成为什么

   {

​     upsert: <boolean>,//可选 默认为false 如果要修改的内容不存在的话 那么什么都不执行     如果为true  那么就先把要修改的内容插入进去  然后在修改

​     multi: <boolean>  //可选  默认为false 只修改找到的第一条   true  修改所有找到的数据

   }

)

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1E1.tmp.jpg) 

 

 

 

db.collection.remove(

   <query>,//要删除的内容

   {

​     justOne: <boolean>  true 或者数字非0  就是删除1条  不写删除全部

​    }

)

 

![img](file:///C:\Users\Asus\AppData\Local\Temp\ksohtml\wps1E2.tmp.jpg) 

 