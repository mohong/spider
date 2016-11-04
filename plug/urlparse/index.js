/**
 * url参数的解析方式
 * Created by mohong on 2016/11/4.
 */

var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var qs = require('querystring');
var app = express();


app.listen('3000',function () {
    console.log('app is runing in 3000 port');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//get请求  解析url中带的参数
app.get('/',function (req,res,next) {
    var query = req.query;
    res.send('method:get '+query);
});

//post请求  解析url中带的参数
app.post('/post',function (req,res,next) {
    var params = req.body;
    res.send('method:post '+ params);
});

//router
app.get('/:tab/:id',function (req,res,next) {
    var params = req.params;
    res.send(params);
});

//url解析 要引入url模块
app.get('/url',function (req,res,next) {
    var urlString = 'https://cnodejs.org/?tab=all$page=1';
    var queryUrl = url.parse(urlString).query;  //字符串形式
    var obj = qs.parse(queryUrl);  //转换为object
    res.send(obj);
})