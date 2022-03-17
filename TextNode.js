var http = require('http');
// 请求模块
var fs = require('fs');
// 读取模块

//var express = require('express');
// express框架

var events = require('events');

http.createServer(function (request, response) {
    // 发送http头部
    // Http状态值200 ： Ok
    // 内容类型： text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // 发送响应数据 “hello world”
    response.end("hello,world\n");

}).listen(8899);


var eventEmitter = new events.EventEmitter();
eventEmitter.on('hint', function () {
    console.log('第一尺码');
})
eventEmitter.emit('hint');

// 终端打印如下信息
console.log('TextNode running at http://127.0.0.1:8899/');

