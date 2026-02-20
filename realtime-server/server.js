const http=require('http');
const {Server}=require('socket.io');
const server=http.createServer();
const io=new Server(server,{cors:{origin:'*'}});
io.on('connection',socket=>{});
server.listen(3001);