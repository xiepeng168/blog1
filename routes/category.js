var express = require('express');
var router = express.Router();
const  category = require("../controllers/category")

/* GET users listing. */
//获取文章
router.get('/',category.index);
//获取单个文章
router.get('/find/:id',category.get);
//添加文章
router.post('/add',category.save);
//更新文章
router.post('/update/:id',category.update);
//删除文章
router.get('/delete/:id',category.del);

module.exports = router;