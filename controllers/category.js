const CategoryModel = require('../modules/category');
const  Category={

    index:(req,res,next)=>{
        //搜索关键字  正则表达式  接受传过来的key
        let key =req.query.key;
        let  regex = RegExp(key);
        //分页
        //总页数  一页的显示个数
        let  count = 0;
        let  limit = 2;
        let  page=req.query.page;
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
        CategoryModel.find(where).count().then(doc=>{
            //文章个数
            count = doc;
            console.log(count);
            //分页 总页数
            totalPage=Math.ceil(count/limit);
            console.log(key);
            CategoryModel.find(where).skip((page-1)*limit).limit(2).sort({ create_at:"desc"}).then(doc => {
                res.json(doc)
            })
            // res.json(doc)
        });



    },
    //获取单个文章
    get:(req,res,next)=>{
        let id=req.params.id;
        CategoryModel.find({_id:id}).then(doc=>{
            res.json(doc)

        })
    },


    //更新文章
    update:(req,res,next)=>{
        let id=req.params.id;
        CategoryModel.update({_id:id},{
            title:req.body.title,
            content:req.body.content,
            author:req.body.author,
            is_jing:req.body.is_jing,
            status:req.body.status,
            img:"",

        }).then(doc=>{
            res.json(doc)

        })


    },
    save:(req,res,next)=>{
        console.log(req);
        let articleModel = new CategoryModel({
            title:"这是个文章！",
            content:req.body.content,
            author:req.body.author,
            is_jing:req.body.is_jing,
            status:req.body.status,
            img:""
        });
        articleModel.save();
        console.log(articleModel);
        res.json({
            "msg" : "添加成功"
        })
    },
    del:(req,res,next)=>{
        let id=req.params.id;
        CategoryModel.remove({_id:id}).then(doc=>{
            res.json(doc)
        })
    }
}
module.exports =Category;