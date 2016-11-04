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

                if(lastPageUrl!=undefined){
                    var queryUrl = url.parse(lastPageUrl).query;
                    console.log(queryUrl);
                    var obj= qs.parse(queryUrl);
                    console.log(obj);

                    var totalPages=obj.page;
                    console.log(totalPages);
                }else{
                    var totalPages=$('.pagination').attr('current_page');
                    console.log(totalPages);
                }

                var items  = [];
                $('#topic_list .topic_title').each(function (index,element) {
                    var $element = $(element);
                    var type = $element.parent().parent().find('.put_top').text();
                    items.push({
                        title: $element.attr('title'),
                        href: $element.attr('href'),
                        link: url.resolve(cnodeUrl,$element.attr('href')),
                        type: type
                    });
                });
                items.totalPages = totalPages;
                res.send(items);
                //res.render('index', { title: '资源列表'});
            })
    }
};

module.exports = CNode;