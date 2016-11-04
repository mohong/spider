/**
 * Created by mohong on 2016/11/4.
 */

var async = require('async');
async.series({
    one: function(callback){
            callback(null,1);
        },
    two: function (callback) {
            callback(null,2);
        }

},function (err,result) {
    console.log(result);
});
