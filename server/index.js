"use strict";
exports.__esModule = true;
var express = require("express");
var sio = require("socket.io");
var app = express();
var io = sio();
console.log("starting");
var id = 1;
io.on('connection', function (socket) {
    io.emit('msg', { author: "System", msg: "user joined", id: id });
    id++;
    console.log("connected");
    io.emit("customEmit", "ghigfoi");
    io.emit("msg", { author: "Me", msg: "Test" });
    socket.on('msg2', function (data) {
        id++;
        console.log({ author: data.author, msg: data.msg, id: id });
        io.emit('msg', { author: data.author, msg: data.msg, id: id });
    });
    socket.on('disconnect', function () {
        io.emit('msg', { author: "System", msg: "user left", id: id });
        id++;
        console.log('user disconnected');
    });
});
app.use(express.static(__dirname + "/../dist/"));
app.get('/', function (req, res) {
    res.sendfile(__dirname + "/../dist/" + "index.html");
});
io.listen(1992);
app.listen(80, function () {
    console.log('strarted.');
});
//setInterval(() => {
//    console.log("Heap: "+(process.memoryUsage().heapUsed/1000000) + " Mb  /  " + (process.memoryUsage().heapTotal/1000000)+" Mb")
//},1000);
