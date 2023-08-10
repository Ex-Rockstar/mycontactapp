const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectdb = require("./config/dbConnection");

const dotenv = require("dotenv").config();

connectdb();
const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(errorHandler)
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, ()=>{
    console.log(`hello world server is on ${port}`)
})
