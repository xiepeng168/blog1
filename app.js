
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const database =require('./bootstrap/database');
database.connect();
//路由文件
const index = require('./routes/index');
// const users = require('./routes/users');
const login = require('./routes/login');
const article =require('./routes/article');
const category =require('./routes/category');
const users =require("./routes/user");
const home =require("./routes/home");
const details =require("./routes/details");
const CategoryModel = require('./modules/category');
const  session =require("express-session");

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'keyboard cat', //一个String类型的字符串，作为服务器端生成session的签名
    resave: true, //(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。
    saveUninitialized: true //初始化session时是否保存到存储
}));


//中间件   模板  在express中
app.use((req,res,next)=>{
  CategoryModel.find({is_nav:1}).then(doc=>{
    res.locals.categoryList = doc;
      next();
  });
});

app.use((req,res,next)=>{
    CategoryModel.find({is_nav:1}).then(doc=>{
        res.locals.categoryList = doc;
        next();
    });
});



app.use('/', index);
// app.use('/users', users);
app.use('/login',login);
app.use('/article',article);
app.use('/category',category);
app.use('/user',users);
app.use('/home',home);
app.use('/details',details);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
