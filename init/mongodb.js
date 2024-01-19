const mongoose = require('mongoose')
const databaseurl ='mongodb+srv://aman:wDTMgHBTtmOAoLro@todo-two.8xtu7s7.mongodb.net/todoDB?retryWrites=true&w=majority';

const connectTodatabase =async()=>{
  
    try {
      await mongoose.connect(databaseurl);
       console.log("databse second succefully connected") 
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
module.exports =connectTodatabase;