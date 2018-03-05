var express = require('express');
var router = express.Router();
const home =require('../controllers/home')

/* GET home page. */
// 首页
router.get('/',home.index);
//列表页
// router.get('/',home.category);
//
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
// });
// router.get('/', home);
module.exports = router;
