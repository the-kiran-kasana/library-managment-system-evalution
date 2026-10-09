const express = require("express");
const {connectDb} = require("./config/db")
const {AutherRoutes} = require("./routes/authorRoutes");
const {BookRoutes} = require("./routes/bookRoutes");

const app = express();
app.use(express.json());

connectDb();

app.use("/library" , AutherRoutes);
app.use("/library" , BookRoutes);

app.use((req , res) => {
   res.status(404).json({error : "404 , request not found"})
})

app.listen(2000 , () => {
   console.log("server is running on 2000");
})