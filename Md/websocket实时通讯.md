## websocket实时通讯

websocket 是一种网络通信协议，一般用来进行实时通信会使用到

下载 npm install --save socket.io

**为什么要用websocket？**

websocket 协议和 http 协议类似，http 协议有一个缺陷，只能由客户方端发起请求，服务端根据请求 url 和传过去的参数返回对应结果

websocket 是双向通信的，只要 websocket 连接建立起来，可以由客户端给服务端发送数据，也可以由服务端主动给客户端发送数据

websocket 适用场景：聊天室