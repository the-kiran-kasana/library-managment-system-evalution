const express = require("express");
const {connectDb} = require("./config/db")

const app = express();
app.use(express.json());

connectDb();


app.use((req , res) => {
   res.status(404).json({error : "404 , request not found"})
})

app.listen(2000 , () => {
   console.log("server is running on 2000");
})