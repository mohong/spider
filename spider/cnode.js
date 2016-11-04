/**
 *
 * Created by mohong on 2016/11/4.
 */

var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');
var qs = require('querystring');

var cnodeUrl = 'https://cnodejs.org/';
var CNode = function (curl) {
    cnodeUrl = curl;
}

CNode.prototype = {
    getDate: function (res) {
        //superagent获取数据
        superagent.get(cnodeUrl)
            .end(function (err,sres) {
                if (err) {
                    return next(err);
                }
                //cheerio解析
                var $ = cheerio.load(sres.text);
                //totalpages
                var lastPageUrl = $('.pagination li:last-child').find('a').attr('href');
                console.log(lastPageUrl);
                var queryUrl = url.parse(lastPageUrl).query;    //tab=all&page=470
                var obj = qs.parse(queryUrl);                   //解析为对象
                var totalPages = obj.page;

                var items  = [];
                $('#topic_list .topic_title').each(function (index,element) {
                    var $element = $(element);
                    var type = $element.parent().parent().find('.topic_tab').text();
                    items.push({
                        title: $element.attr('title'),
                        href: $element.attr('href'),
                        link: url.resolve(cnodeUrl,$element.attr('href')),
                        type: type
                    });
                });
                items.totalPages = totalPages;
                res.send(items);
            })
    }
};

module.exports = CNode;