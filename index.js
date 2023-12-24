const express =require("express");
const PORT =8000;
//initialize the app
const app =express();
//view engine
app.set("view engine","ejs")

//LISTEN TO SERVER
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
});

