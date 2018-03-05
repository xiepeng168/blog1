
var express = require('express');
var router = express.Router();
const  user = require("../controllers/user")

router.get('/',function (req, res, next) {
    res.render('login',{title:"登录页面"})
});
router.get('/myspace',function (req, res, next) {
    res.render('myspace',{title:"个人中心"})
});

/* GET users listing. */
//登录
router.post('/login',user.login);
//登出
router.get('/find/:id',user.logout);
//更改用户名
// router.post('/add',user.update);
//更改密码
router.post('/update/:id',user.updataPassword);
//添加用户
router.post('/add',user.save);


module.exports = router;