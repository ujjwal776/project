/*const http = require('http');
const data = {
    firstName: 'Laurence',
    lastname: 'svekis'
}

const site = http.createServer(function(req, res) {
    console.log('Hello World');
    console.log(req.headers);
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.write(JSON.stringify(data));
    res.end();
});
site.listen(3000);*/
var express = require('express');
var app = express()
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());



app.get('/', function(req, res) {
    res.send('G2');
})
app.post('/', function(req, res) {
    console.log(req.body);
    res.send('post send ');
});
app.put('/', function(req, res) {

    res.send('this is put');
});
app.delete('/', function(req, res) {

    res.send('delete');
})

app.listen(3000);