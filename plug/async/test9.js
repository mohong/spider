/**
 * co模块
 * Created by mohong on 2016/11/5.
 */

var sleep = function (time) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            resolve();
        },time)
    })
}

var start = async function () {
    console.log('start');
    await sleep(2000);
    console.log('end');
}

