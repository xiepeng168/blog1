//文章模型
const mongoose = require('mongoose');
const moment = require("moment");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ArticleSchema = new Schema({
    title:{
        type:String,
        default:''
    },
    img:{
        type:String,
        default:''
    },
    content:{
        type:String,
        default:''
    },
    author:{
        type:String,
        default:''
    },
    is_jing:{
        type:String,
        default:''
    },
    view:{
        type:String,
        default:''
    },
    status:{
        type:Number,
        default:''
    },
    category:{
        type:ObjectId,

    },
    user_id:{
        type:String,
        default:''
    },
    create_at:{
        type:Date,
        default:Date.now,
        get:(val)=>moment(val).format("YYYY-MM-DD:hh:mm:ss")
    },
    update_at:{
        type:Date,
        default:Date.now
    },
    delete_at:{
        type:Date,
        default:null
    }
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
