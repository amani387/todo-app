
const express =require("express");
const debConnect  = require("./config/dbConnect");
const path =require("path");
const { default: mongoose, model } = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
//const moment =require('moment')
//const mongodbcon =require('./init/mongodb');
const connectTodatabase = require("./init/mongodb");
//const Todo =require('./model/Todo')
const todoRoute = require('./routes/todo')

//enviroment variable

dotenv.config() 
connectTodatabase();
//initialize the app
const app =express();
//view engine
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",todoRoute);
module.exports=app;

//debConnect()



