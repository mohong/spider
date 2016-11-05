/**
 * Thunk版的readfile函数，单参数
 * Created by mohong on 2016/11/5.
 */

var readFile = require('readFile');

var Thunk = function (filename) {
    return function readFileThunk(callback) {
        return readFile(filename,callback);
    }
};

var readFileThunk = Thunk(filename);
readFileThunk(callback);