const mongoose = require('mongoose');
const setting = require('../setting');
const Content = require('./content');
//这句话说明我们使用的promise对象是ES6中原生的promise对象.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/zq');
const Dbset = {
    // 新增操作
    add: (obj, req, res, logMsg) => {
        let newObj = new obj(req.body);
        newObj.save().then(result => {
            res.end(logMsg);
        }).catch(err => {
            res.end(err)
        })
    }
}
module.exports = Dbset;