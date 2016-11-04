/**
 * Created by mohong on 2016/11/4.
 */

var readFile = require('fs-readfile-promise');

readFile('index.js')
    .then(function (data) {
        console.log(data.toString());
    })
    .then(function () {
        return readFile('test1.js');
    })
    .then(function (data) {
        console.log(data.toString());
    })
    .catch(function (err) {
        console.log(err);
    });

