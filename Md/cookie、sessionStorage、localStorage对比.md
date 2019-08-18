## cookie与HTML5本地存储Web Storage：sessionStorage和localStorage

**html5的Web Storage**包括了两种存储方式：sessionStorage和localStorage。

sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。

因此**sessionStorage**不是一种持久化的本地存储，仅仅是会话级别的存储。

而**localStorage**用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的；

**cookie**是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。

## 它们的区别：

1、 cookie数据始终在同源的http请求中携带（即使不需要），即**cookie在浏览器和服务器间来回传递**。而**sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。**cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。

2、 **存储大小限制也不同**，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
	sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

3、 **数据有效期不同**，sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

**作用域不同**，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
localStorage 在所有同源窗口中都是共享的；
cookie也是在所有同源窗口中都是共享的。

