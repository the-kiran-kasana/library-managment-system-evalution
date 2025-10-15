const express = require("express");
const AutherRoutes = express.Router();
const AuthorModel = require("../models/authorModel");
//const {StatusCheck} = require("../middleware/library.middleware");
const {getAllAuther , addNewAuther , updateAuther ,deleteAuther} = require("../controllers/authorController");



AutherRoutes.get("/", getAllAuther);
AutherRoutes.post("/addNewAuther" ,addNewAuther);
AutherRoutes.patch("/updateById/:id" ,updateAuther);
AutherRoutes.delete("/deleteAuther/:id" ,deleteAuther);




module.exports = {AutherRoutes};