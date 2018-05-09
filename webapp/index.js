var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var numUsers = 0;

//CONFIG
app.use(express.static('public'));
//app.use(favicon(__dirname + '/public/images/like.ico'));
//app.use(wedeployMiddleware.auth({url: 'auth.musicv.wedeploy.io'}));

/////////PUBLIC


app.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/index.html'));
});



http.listen(80, function(){
  console.log('listening on *:80');
});

