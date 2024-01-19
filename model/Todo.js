//  SCHEMA CREATION 
const mongoose =require('mongoose')
const todoschema = mongoose.Schema(
    {

        title: { type: String, required: true }, desc: { type: String },

    }
    , { timestamps: true })
// creating the model
const Todo = mongoose.model("todo", todoschema)
module.exports =Todo
