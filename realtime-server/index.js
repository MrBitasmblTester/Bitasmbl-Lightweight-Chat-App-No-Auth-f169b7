const http=require('http');
const {Server}=require('socket.io');
const chat=require('./socketHandlers/chat');
const server=http.createServer();
const io=new Server(server,{cors:{origin:'*'}});
chat(io);
server.listen(3001);