const UserModel = require('../modules/user');
const User ={
    // 登录
    login:(req,res,next)=>{
        UserModel.findOne({
            username:req.body.username,
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
console.log(doc);
            if (doc){
                res.render('login0');
                console.log("登录成功");


            }else{
                res.render('login1');
                console.log("登录失败");

            }
        })
    },
    logout:()=>{


    },
    update:(req,res,next)=>{
            let id=req.params.id;
        UserModel.update({_id:id},{


            }).then(doc=>{
                res.json(doc)

            })

    },
    updataPassword:(req,res,next)=>{
        let id=req.params.id;
        UserModel.update({_id:id},{


        }).then(doc=>{
            res.json(doc)

        })

    },
    save:(req,res,next)=>{
        console.log(req);
        let articleModel = new UserModel({
            username:req.body.username,
            password:req.body.password,
        });
        articleModel.save();
        console.log(articleModel);
        res.json({
            "msg" : "添加成功"
        })
    },
}

module.exports =User;
