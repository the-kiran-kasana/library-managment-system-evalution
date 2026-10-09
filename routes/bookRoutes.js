const express = require("express");
const BookRoutes = express.Router();
const BookModel = require("../models/bookModel");
//const {StatusCheck} = require("../middleware/library.middleware");
const {getAllBook , addNewBook , updateBook ,deleteBook} = require("../controllers/bookController");



BookRoutes.get("/", getAllBook);
BookRoutes.post("/addNewBook"  ,addNewBook);
BookRoutes.patch("/updateById/:id" ,updateBook);
BookRoutes.delete("/deleteBookOfAuther/:id" ,deleteBook);




module.exports = {BookRoutes};