var express = require('express');
var router = express.Router();
const  article = require("../controllers/article");
const  upload =require("../library/upload");
const auth = require("../middleware/auth");

/* GET users listing. */
//获取文章
router.get('/',article.index);
//获取单个文章
router.get('/find/:id',article.get);
//添加文章页面
// router.post('/add',article.add);
//添加文章
router.post('/add',upload.single("img"),article.add);
//更新文章
router.post('/update/:id',article.update);
//删除文章
router.get('/delete/:id',article.del);

module.exports = router;