/**
 * Created by mohong on 2016/11/4.
 */
function asyncFunction() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve('hello world');
        },1000);
    });
}
asyncFunction().then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.log(err);
});