const http = require('http');
const site = http.CreateServer(function(req, res) {
    console.log('hello world');
    Res.Write("yeh go http!!!!");
    res.setHeader("what should i do here??");



});
site.listen(3000);