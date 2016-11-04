var express = require('express');
var router = express.Router();
var cnode = require('../spider/cnode');

/* GET home page. */
router.get('/', function(req, res, next) {
  var page=req.query.page;
  var tab=req.query.tab;
  var requestUrl = 'https://cnodejs.org/';
  if(page!=undefined){
    requestUrl='https://cnodejs.org/?tab='+tab+'&page='+page;
  };
  var _cnode = new cnode(requestUrl);
  _cnode.getDate(res);
});

module.exports = router;
