/**
 * 需求，要先执行f2，在执行f1
 * Created by mohong on 2016/11/5.
 */

var async = require('async');
async.series({
     one: function(callback){
          setTimeout(function(){
                     callback(null, 1);
          }, 5000);
         },
     two: function(callback){
             setTimeout(function(){
                     callback(null, 2);
                 }, 1000);
         }
    },
    function(err, results) {
        console.log(results);
     }
 );



