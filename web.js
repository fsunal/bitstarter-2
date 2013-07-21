var express = require('express');
var app = express.createServer(express.logger());

var fs = require("fs");
var indexBuff = fs.readFileSync('index.html');

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
	response.send(indexBuff.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
