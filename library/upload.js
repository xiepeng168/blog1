// 引入      文件上传
const multer = require('multer');

// 创建储存配置信息
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("multer:"+file);
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        let fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
// 创建对象
const upload = multer({
    storage: storage
});

// 导出对象
module.exports = upload;

// 使用对象
// upload.single('img');
//
// /**
//  * 文件上传库
//  */
// const multer = require('multer');
//
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         console.log(file);
//         cb(null, './public/uploads')
//     },
//     filename: function (req, file, cb) {
//         let fileFormat = (file.originalname).split(".");
//         cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
//     }
// })
//
// const upload = multer({
//     storage: storage
// });

// module.exports = upload;