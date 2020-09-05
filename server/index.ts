import * as express from 'express';
import * as fs from 'fs';
const app = express();

app.use(express.static(__dirname+"/../dist/"));


app.get('/', (req,res) => {
    res.redirect("/index.html");
});

app.listen(80,() => {
    console.log('strarted.');
});

setInterval(() => {
    console.log("Heap: "+(process.memoryUsage().heapUsed/1000000) + " Mb  /  " + (process.memoryUsage().heapTotal/1000000)+" Mb")
},1000);