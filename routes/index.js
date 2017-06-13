var express = require('express');
var router = express.Router();
const Content = require('../model/content')
    //链接数据库
const DbSet = require('../model/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '发送ajax' });
});
router.post('/post', function(req, res, next) {
    DbSet.add(Content, req, res, 'POST')
});
router.get('/post', function(req, res, next) {
    res.render('post', {});
})
module.exports = router;