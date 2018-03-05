var express = require('express');
var router = express.Router();
var userModel = require('../bootstrap/database');

router.get('/',function (req, res, next) {
    res.render('login',{title:"登录页面"})
});

router.post('/login',function (req, res, next) {
    userModel.findOne({
        name:req.body.username,
        password:req.body.password
    },function (err, doc) {
        if (err){
            console.log('登录失败' + err.stack);
            return;
        }
        console.log(doc);

        if(doc==null){
            console.log("登录失败");
        }else{
            console.log("登录成功");
        }

        if (doc){
            res.render('login0');

        }else{
            res.render('login1');
        }
    })
})

module.exports = router;