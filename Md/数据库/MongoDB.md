## MongoDB

数据管理发展阶段：

1.人工管理

+ 容易丢失数据
+ 数据重复
+ 难以查阅和使用
+ 维护成本高

2.文件系统阶段

+  容易储存
+ 处理速度快
+ 数据形式丰富

3.数据库系统阶段

+ 易与维护海量数据
+ 更快的运算预处理
+ 保证数据的安全
+ 使用编程语言管理数据

## 数据库分类

关系型数据库（SQL）：
	MySQL	Oracle	SQL Server	DB2

非关系型数据库（NOSQL）：
	Redis	MongoDB	.....

**关系模型**指的是二维表格模型，而一个关系型数据库就是由二维表及其之间的联系所组成的一个数据组织。

**非关系型数据库**提出另一种理念，例如，以键值对存储，且结构不固定，每一条记录可以有不一样的字段，记录可以根据需要增加一些自己的键值对，这样就不会局限于固定的结构，可以减少一些时间和空间的开销。使用这种方式，用户可以根据需要去添加自己需要的字段。

## MongoDB概念

**MongoDB是一款为web应用程序和互联网基础设施设计的数据库管理系统。MongoDB就是数据库（非关系型的数据库），是NoSQL类型的数据库**

**NoSQL是什么？**
	NoSQL（NoSQL=Not Only SQL），意即“不仅仅是SQL”。是非关系型数据存储的广义定义，通常以key-value形式存储数据，没有表结构。
	说明：“不仅仅是SQL” 指不适用SQL语句的数据库。

**为什么会出现NoSQL？**
	随着互联网web2.0网站的兴起，传统的关系数据库在应付web2.0网站，特别是超大规模和高并发的SNS类型的web2.0纯动态网站已经显得力不从心，暴露了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，尤其是大数据应用难题，包括超大规模数据的存储。

**NoSQL产生背景：**
	大数据时代对数据仓库的要求

+ 高并发读写需求
+ 海量数据的高效率读写
+ 高扩展性和可用性



**NoSQL的优缺点：**

**优点：**
		a.易扩展（去掉关系数据库之间的数据关系，数据之间无关系，在架构层面也带了扩展能力）.
		b.快速的读写（sql语句不用解析，功能相对单一）
		c.成本低廉（开源的软件）
		d.架构灵活，没有复杂的关系（表与表之间不存在关系）

**缺点：**
		a.没有统一的标准.
		b.没有正式的官方支持.
		c.支持的特性不够丰富，现有产品所提供的功能比较有限 不能像Mysql SQL Server和Oricale一样，提供各种附加功能.



**MongoDB   VS   mysql**

与MySQL的性能比较
		分别插入100万条记录，并对其做100个用户并发查询操作
		MySQL InnoDB引擎 无索引 ：插入时间10分33秒；
		MySQL InnoDB引擎 有索引： 插入时间11分16秒；
		MySQL MyISAM引擎 无索引：插入时间3分21秒；
		MySQL MyISAM引擎 有索引：插入时间3分50秒；
		MongoDB 无索引：插入时间37秒；
		MongoDB 有索引：插入时间50秒；

**MongoDB应用邻域**：
		博客文章-评论系统		记录日志		缓存		即时通信聊天记录

**MongoDB的存储方式：**
		MongoDB是将数据存储到硬盘上.
		MongoDB内部支持的js解释器，我们可以在MongoDB中直接写js代码.
		MongoDB存数据的时候是key->value形式：（js中的key-value就是对象{key：value}）
		MongoDB中分为数据库，集合（相当于MySQL中的表），文档（相当于MySQL的记录）

**MongoDB组成**：
		传统的关系型数据库一般是有数据库（database），表（tables），记录（record）三个层次的概念组成.
		MongoDB则是由数据库（database），集合（collection），文档对象（document）三个层次组成.
		MongoDB中的集合（相当于关系型数据库中的表）但是没有了表于表之间的关系，以及列和行的概念，这体现了其模式自由的特点.
		集合：即一组文档，多个文档存放在一起即变成集合，类似于MySQL中 的表.
		数据库：多个集合组合在一起即变成数据库.

**MongoDB操作：**

开始感受MongoDB的使用
	连接MongoDB
	在MongoDB的安装路径下的bin文件夹中打开CMD
	语法：Mongo ip地址：端口号（MongoDB的默认端口号为27017）/数据库名（默认连接test）

简单连接：直接输入mongo

**MongoDB操作数据库：**

查看当前数据库：>show dbs
	增加/切换数据库：>use[db名称]
	删除数据库：>use[db名称]
				>db.dropDatabase();
	查看数据库当中的集合：>show collections;
	创建collection：>db.[collection名称].insert({json数据})；//创建添加数据
				>db.createCollection([collection名称])；//只创建
	删除集合：>db.[collection名称].drop();

**MongoDB操作数据文档—添加**

插入数据语句：
		插入数据：>db.COLLECTION_NAME.insert({"key":"val",````})
		插入记录成功之后，MongoDB会默认为每一个文档都添加一个_id的字段，并且同一集合中的__id是唯一的，该字段可以是任意数据类型，默认为objectid
	_id是否可自定义？
		id在插入的时候手工定义id的值（值是唯一的）
	//插入：>db.COLLECTION_NAME.save(document)

save和insert有什么区别呢？
		insert：若新增数据的主键已经存在，则会抛异常提示主键重复，不保存当前数据。
		save：若新增数据的主见已经存在，则会对当前已经存在的数据进行修改操作。

批量插入数据语句：

		>```
		>	>db.COLLECTION_NAME.insert([document1，document2，document3])
		>```
		>
		>

查询数据库语句：

		>```
		>	>db.[collection名称].find();//查询集合中所有的记录
		>	>db.[collection名称].find().pretty();//格式化查询是的查询出来的数据在命令行中更加美观的显示（有显示格式的优化），不至于太紧凑。
		>```
		>
		>

按条件查询：
		`>db.[collection].find({"key":value});`

第二个参数查询列格式说明   数字1代表需要查询的   0代表除此以外的（_id会默认显示）
	第二个查询参数里也可以有多个key：value来进行更多内容筛选

**MongoDB文档管理—查询：**

**条件运算符**：条件操作符用于比较两个表达式并从MongoDB集合中获取数据。
	db.[collection名称].find({key:{$gt:100}})
	（>）大于-$gt

（<）小于-$it

（>=）大于等于-$gte

（<=）小于等于-$ite

（!=）不等于-$ne:

**And查询**：find（）方法可以传入多个键（key），每个键（key）以逗号隔开，即常规SQL的AND条件。

**Or查询**：or条件语句使用了关键字$or

		>```
		>	>db.col.find({$or:[{key1:value1},{key2:value2}]}).pretty()
		>```

**排序**：按照首字母
		`>db.[集合名称].find().sort({key:1});`
		`key:要排序的字段 1：正序  -1：倒序`

**limit**：读取指定数量的数据记录条数，使用MongoDB的limit方法，limit（）方法接受一个数字参数	
		`>db.COLLECTION_NAME.find().limit(NUMBER)`

**skip**：使用skip（）方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。
	`>db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)`
	limit：方法接受一个数字参数，该参数指定从MongoDB中读取的记录条数
	skip：跳过的记录数

**count**:返回集合中文档的数量
		`>db.COLLECTION_NAME.find().count();`//查询出文档的数量
		`>db.COLLECTION_NAME.count();`//集合中全部文档的数量

**修改语句**：
		`>db.collection.update({<query>},{$set:{<update>}},{upsert:<boolean>,multi:<boolean>})`

query：查询出要修改的数据
	update：要修改的数据的值
	upsert：可选，这个参数的意思是，如果不存在update的记录，是否插入objNew，true为插入，默认是false，不插入
	multi：可选，MongoDB默认是false，只更新找到的第一条记录，如果这个参数为true，就把按条件查出来的多条记录全部更新

**删除语句**：
		`>db.collection.remove(<query>,{justOne:<boolean>})`
	参数说明：
		query：可选，删除的文档的条件
		justOne：可选，如果设为true或1，则只删除一个文档