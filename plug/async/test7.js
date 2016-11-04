/**
 * Created by mohong on 2016/11/5.
 */
var aPromise = new Promise(function (resolve,reject) {
    resolve(100);
});
aPromise.then(function (value) {
    return value * 2;
});
aPromise.then(function (value) {
    return value * 2;
});
aPromise.then(function (value) {
    console.log('1 : ' + value);
});

var bPromise = new Promise(function (resolve,reject) {
    resolve(100);
});
bPromise.then(function (value) {
    return value * 2;
}).then(function (value) {
    return value * 2;
}).then(function (value) {
    console.log('2 : ' + value);
})