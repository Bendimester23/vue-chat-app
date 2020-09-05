import * as express from 'express';
import * as sio from 'socket.io';
const app = express();
const io = sio();

console.log("starting");

let id = 1;

io.on('connection',(socket) => {
    io.emit('msg', {author:"System",msg: "user joined",id:id});
    id++;
    console.log("connected");
    io.emit("customEmit", "ghigfoi");
    io.emit("msg", {author:"Me",msg:"Test"});
    socket.on('msg2',(data) => {
        id++;
        console.log({author:data.author,msg:data.msg,id});
        io.emit('msg',{author:data.author,msg:data.msg,id});
    });
    socket.on('disconnect', () => {
        io.emit('msg', {author:"System",msg: "user left",id:id});
        id++;
        console.log('user disconnected');
      });
});

app.use(express.static(__dirname+"/../dist/"));


app.get('/', (req,res) => {
    res.sendfile(__dirname+"/../dist/"+"index.html");
});

io.listen(1992);

app.listen(80,() => {
    console.log('strarted.');
});


//setInterval(() => {
//    console.log("Heap: "+(process.memoryUsage().heapUsed/1000000) + " Mb  /  " + (process.memoryUsage().heapTotal/1000000)+" Mb")
//},1000);