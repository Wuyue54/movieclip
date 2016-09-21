"use strict";
require('babel-register');

const express = require('express');
const path = require('path');


const app = express();
app.set('port', process.env.PORT || 3000);
app.use('/static', express.static(__dirname + '/public'));


app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});

const server = require('http').createServer(app);
server.listen(app.get('port'),function(){
	console.log("Express server listening on port " + app.get('port'));
});
