"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/../dist/"));
app.get('/', function (req, res) {
    res.redirect("/index.html");
});
app.listen(80, function () {
    console.log('strarted.');
});
setInterval(function () {
    console.log("Heap: " + (process.memoryUsage().heapUsed / 1000000) + " Mb  /  " + (process.memoryUsage().heapTotal / 1000000) + " Mb");
}, 1000);
