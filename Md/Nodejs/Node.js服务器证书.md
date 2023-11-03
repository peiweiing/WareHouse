搭建https服务器

https是nodejs自带核心模块，不需要额外安装
搭建https服务区需要SSL证书，对于公网服务的网站，SSL证书需要向证书颁发机构购买；对于自用的网站，可以自制

自制https SSL证书命令
1.生成私钥文件：openssl genrsa -out key.pem
2.生成证书辅助文件：openssl req -new -key key.pem -out csr.pem
3.生成证书文件：openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

cert.prm（证书文件）和key.pem（私钥文件），只需这两个文件就可以运行https服务器



使用fs文件系统读取文件
var options = {
    //readFileSync:同步读取文件
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem')
};
https.createServer(options,app).listen(8000);

