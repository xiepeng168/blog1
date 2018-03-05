
var express = require('express');
var router = express.Router();
const  home = require("../controllers/home")

router.get('/',home.index);

router.get('/myspace',function (req, res, next) {
    res.render('myspace',{title:"个人中心"})
});

router.get('/neww',function (req, res, next) {
    res.render('neww',{title:"写文章"})
});

router.get('/details',function (req, res, next) {
    res.render('details',{title:"写文章"})
});



/* GET users listing. */
//登录
// router.post('/home/login',home.login);
//登出
// router.get('/find/:id',user.logout);
// //更改用户名
// router.post('/add',user.update);
// //更改密码
// router.post('/update/:id',user.updataPassword);


module.exports = router;