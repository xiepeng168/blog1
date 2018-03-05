//数据库连接
var mongoose = require('mongoose');

function connect(){
    mongoose.connect("mongodb://localhost:27017/blog");
    var db = mongoose.connection;
    db.on('open',function () {
        console.log('数据库连接成功');
    });
    db.on('error',function (err) {
        console.log(err.stack);
    })
}
exports.connect = connect;