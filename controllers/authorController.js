const AuthorModel = require("../models/authorModel");
const BookModel = require("../models/bookModel");


const getAllAuther = async (req ,res) => {
       try{
            let auther = await AuthorModel.find();
            res.status(200).json({msg:"list of all authers" , auther});
       }catch(err){
            res.status(500).json({err});
       }
}





const addNewAuther = async (req ,res) => {
         const newAuther = req.body;
          try{
             const auther = await AuthorModel.create(newAuther);
             res.status(200).json({msg:"auther is added",auther});
          }catch(err){
             res.status(500).json({msg:"auther is wrong" , err});
          }
}




const updateAuther = async (req ,res) => {
         const {id} = req.params;
         const autherId = await AuthorModel.findById(id);

          if(!autherId){
             res.status(406).json({msg:"auther not found"});
          }else{
             await AuthorModel.findByIdAndUpdate(id , req.body);
             res.status(201).json({msg:"auther is updated",autherId});
          }
}




const deleteAuther = async (req ,res) => {
        try{
             const {id} = req.params;
             const DeleteAuther = await AuthorModel.findByIdAndDelete(id);
             if(!DeleteAuther){
               return res.status(404).json({msg:"auther is not found"});
             }
             res.status(200).json({msg:"delete successfully" , DeleteAuther});
        }catch(err){
           res.status(404).json({msg:"somthing wrong"});
        }
}







module.exports =  {getAllAuther , addNewAuther , updateAuther ,deleteAuther} ;