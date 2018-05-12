var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");
var numUsers = 0;

//CONFIG
app.use(express.static('public'));
//app.use(favicon(__dirname + '/public/images/like.ico'));
//app.use(wedeployMiddleware.auth({url: 'auth.musicv.wedeploy.io'}));

/////////PUBLIC


app.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/index.html'));
});

app.get('/formula1', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/formula1.html'));
});

app.get('/formulaindy', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/formulaindy.html'));
});

app.get('/formulatruck', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/formulatruck.html'));
});

app.get('/formulae', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/formulae.html'));
});

app.get('/lemans', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/lemans.html'));
});

app.get('/rally', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/rally.html'));
});

app.get('/nascar', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/nascar.html'));
});

app.get('/wtcc', function (req, res, next) {
	res.sendFile(path.join(__dirname + '/private/wtcc.html'));
});

app.get('/tableformula1', function(req, res){

	res.setHeader('Content-Type', 'application/json');

	console.log("get /table_formula1");

    url = 'https://www.bbc.com/sport/formula1/drivers-world-championship/standings';

    request(url, function(error, response, html){

    	console.log("request")

        if(!error){
            var $ = cheerio.load(html);

            var title, release, rating;
            var json = { table : ""};
            var tableList = new Array();

            $('.ltable__row').each(function(index, element){
				tableList[index] = {};
				$(element).find('.table__cell').each(function(index2, element2){
					if(index2 == 1){
						tableList[index]['position'] = $(element2).text();
					}
					if(index2 == 2){
						tableList[index]['name'] = $(element2).find(".medium-abbr-off").getAttribute("title");
					}
					if(index2 == 3){
						tableList[index]['team'] = $(element2).text();
					}
					if(index2 == 4){
						tableList[index]['wins'] = $(element2).text();
					}
					if(index2 == 5){
						tableList[index]['points'] = $(element2).text();
					}
				});
			});

			json.table = tableList;
        }
    });
    console.log("json")
    res.send(JSON.stringify(json));
});


http.listen(80, function(){
  console.log('listening on *:80');
});