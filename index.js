const http = require('http');
const site = http.createServer(function(req, res) {
    console.log('hello world');
    //Res.Write("yeh go http!!!!");
    res.setHeader('content-Type', 'text/html');
    console.log(req.rawHeaders);
    res.end('<h1 > hello world </h1>');



});
site.listen(3000);