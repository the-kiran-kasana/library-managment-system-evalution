const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");


const getAllBook = async (req ,res) => {
       try{
            let book = await BookModel.find();
            res.status(200).json({msg:"list of all books" , book});
       }catch(err){
            res.status(500).json({err});
       }
}





const addNewBook = async (req ,res) => {
         const newBook = req.body;
          try{
             const book = await BookModel.create(newBook);
             await AuthorModel.findByIdAndUpdate(author, { $push: { books: book._id } });
             res.status(200).json({msg:"book is added",book});
          }catch(err){
             res.status(500).json({msg:"book is wrong" , err});
          }
}




const updateBook = async (req ,res) => {
         const {id} = req.params;
         const bookId = await BookModel.findById(id);

          if(!taskId){
             res.status(406).json({msg:"book not found"});
          }else{
             await Task.findByIdAndUpdate(id , req.body);
             res.status(201).json({msg:"book is updated",bookId});
          }
}




const deleteBook = async (req ,res) => {
        try{
             const {id} = req.params;
             const DeleteBook = await BookModel.findByIdAndDelete(id);
             if(!DeleteBook){
               return res.status(404).json({msg:"book is not found"});
             }
              await AuthorModel.findByIdAndUpdate(book.author, { $pull: { books: book._id }, });

                 await BookModel.findByIdAndDelete(id);
             res.status(200).json({msg:"delete successfully" , DeleteBook});
        }catch(err){
           res.status(404).json({msg:"somthing wrong"});
        }
}







module.exports =  {getAllBook , addNewBook , updateBook ,deleteBook};