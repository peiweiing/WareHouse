## http通信协议

为了能够让不同设备通过网络进行互联互通、数据交互，必须规定大家都要遵守的标准“通信协议”。 

当前ISO标准是7层网络模型： 

（1）应用层：对应应用程序的通信服务的。示例：telnet，HTTP,FTP,WWW,NFS,SMTP等。 

（2）表示层：定义数据格式及加密，例：FTP以二进制或ASCII格式传输。 

（3）会话层：完成连续消息通知表示层，表示层看到的数据是连续的。示例：RPC，SQL等。 

（4）传输层：不同应用的数据流的输入进行复用，数据包的重新排序功能。示例：TCP，UDP，SPX。 

（5）网络层：定义逻辑地址，路由实现的方式。示例：IP,IPX等。 

（6）数据链路层：如何将数据组合成数据块（帧）传送，如何处理传输差错。示例：ATM，FDDI等。 

（7）物理层：有关传输介质的特性标准。连接头、针、针的使用、电流等。示例：Rj45，802.3等。 

**互联网使用TCP/IP协议**： 

联网设备地址使用IP协议，如何打包数据，数据包编号使用TCP协议。 

TCP把应用程序的数据分割打成IP包，IP负责把包传给目标设备。



**http（超文本传输协议）是一个基于请求与响应的应用层协议。** 

url请求资源的地址 http://host[":"port][abs_path] 

host 主机名，对应IP地址的一个点或一段；port 端口号 ；abs_path 主机上的资源路径 

请求方式： 

get请求，将请求数据作为url一部分发送，不安全，传输数据量小，方便易用。 

post请求，传输数据量大，安全，一般做表单提交。 

常见响应状态码： 

200 OK //客户端请求成功 

400 Bad Request //客户端请求有语法错误，不能被服务器所理解 

401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用 

403 Forbidden //服务器收到请求，但是拒绝提供服务 

404 Not Found //请求资源不存在，输入了错误的URL 

500 Internal Server Error //服务器发生不可预期的错误 

503 Server Unavailable //服务器当前不能处理客户端的请求，一段时间后可能恢复正常