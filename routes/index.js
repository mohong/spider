var express = require('express');
var router = express.Router();
var cnode = require('../spider/cnode');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('list', { title: 'List' });
  var requestUrl = 'https://cnodejs.org/';
  var _cnode = new cnode(requestUrl);
  _cnode.getDate(res);
});

module.exports = router;
