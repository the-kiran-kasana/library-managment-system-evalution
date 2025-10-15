const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
     title:{type:String ,require:true,unique:true},
     summary:{type:String},
     publishedDate:{type:Date,require:true},
     authorId : { type:mongoose.Schema.Types.ObjectId , ref:"Auther" },
     copiesAvailable : {type: Number , require:true , default :true , min:0}
});


const BookModel = mongoose.model("Book" , BookSchema);

module.exports = BookModel;