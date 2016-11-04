/**
 * text1 异步练习
 * Created by mohong on 2016/11/4.
 */

var fs = require('fs');
fs.readFile('index.js','utf8',function (err,data) {
    if (err) throw err;
    console.log(data);
})