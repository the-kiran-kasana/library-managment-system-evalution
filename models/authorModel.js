const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
     name:{type:String ,require:true,unique:true},
     email:{type:String ,require:true , unique:true , match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]},
     bio:{type:String},
     bookId : { type:mongoose.Schema.Types.ObjectId , ref:"Book" }
});


const AuthorModel = mongoose.model("Auther" , AuthorSchema);

module.exports = AuthorModel;

