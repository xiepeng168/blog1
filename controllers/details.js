// const HomeModel = require('../modules/home');
const ArticleModel = require('../modules/article');
const CategoryModel =require("../modules/category");
const  Details={
    index:(req,res,next)=>{
        let user = req.session.loginUser;
        console.log("---------------------");
        console.log(user);
        //  搜索关键字  正则表达式  接受传过来的key

        let key =req.query.key;
        let  regex = RegExp(key);
        //分页
        //总页数  一页的显示个数
        let  count = 0;
        let  limit = 2;
        let  page=req.query.page?req.query.page:1;
        let totalPage = 0;
        let  where={
            // category._id:doc._id;
        };
        if(key){
            where={title:{$regex:regex}};
        }
        //控制查找到多少条数据、、用来分页
        //事件先后顺着排序
        //事件先后顺着排序
        //0 2 1
        //2
        //4
        // count() --方法  显示查找到的所有条数   去掉count（）方法后
        ArticleModel.findOne(where).count().then(doc=>{
            //文章个数
            count = doc;
            console.log(count);
            //分页 总页数
            totalPage=Math.ceil(count/limit);
            console.log(key);
            ArticleModel.find(where).skip((page-1)*limit).limit(2).sort({ create_at:"desc"}).then(doc => {
                // res.json(doc);
                res.render('home',{
                    list:doc,
                    count:count,
                    page:page,
                    totalPage:totalPage,
                });

            })
            // res.json(doc)
        });


    },
    //栏目页
    category:(req,res,next)=>{
        let categoryPath = req.param.category;
        CategoryModel.find().then(doc=>{
            //搜索关键字
            let key =req.query.key;
            let  regex = RegExp(key);
            //分页
            //总页数  一页的显示个数
            let  count = 0;
            let  limit = 2;
            let  page=req.query.page?req.query.page:1;
            let totalPage = 0;
            let  where={};
            if(key){
                where={title:{$regex:regex}};
            }
            //控制查找到多少条数据、、用来分页
            //事件先后顺着排序
            //事件先后顺着排序
            //0 2 1
            //2
            //4
            // count() --方法  显示查找到的所有条数   去掉count（）方法后
            ArticleModel.find(where).count().then(doc=>{
                //文章个数
                count = doc;
                console.log(count);
                //分页 总页数
                totalPage=Math.ceil(count/limit);
                console.log(key);
                ArticleModel.find(where).skip((page-1)*limit).limit(2).sort({ create_at:"desc"}).then(doc => {
                    // res.json(doc);
                    res.render('home',{
                        list:doc,
                        count:count,
                        page:page,
                        totalPage:totalPage,
                    });

                })
                // res.json(doc)
            });

        })

    },
    //用户
    user:(req,res,next)=>{

    },
    //写博客
    add:(req,res,next)=>{
        res.render('neww');
    }
}
module.exports =Details;