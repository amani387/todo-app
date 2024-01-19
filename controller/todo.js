const Todo = require("../model/Todo");
const moment = require("moment");
const homeController = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });
        res.locals.moment = moment;

        res.render("index", { title: "List todo", todos: todos })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addController = async (req, res, next) => {
    try {
        res.render("newTodo", { title: "new todo" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.query;
        const todo = await Todo.findById(id);
        res.render("update", {title:"update todo ",todo})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteTodo = async(req, res, next) => {
    try {
        const {id}  =req.query;
        const todo =await Todo.findById(id);
         res.render("deleteTodo", { title: "Delete Todo",id })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
const addTodo = async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required " });
        }
        console.log(desc)
        const newTodo = new Todo({ title, desc });
        await newTodo.save();
        res.redirect("/")
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const updatetodoController = async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, desc } = req.body;
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: "Todo not Found" })
        }
        todo.title = title;
        todo.desc = desc
   
        await todo.save();
        res.redirect("/")
    } catch (error) {
res.status(500).json({message:error.message})
    }
}
const deleteTodoController =async(req,res,next) =>{
    try{
const {id,confirm} =req.query;
if(confirm === 'yes'){
    await Todo.findByIdAndDelete(id);

}
res.redirect("/")
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = { homeController, addController, updateTodo, deleteTodo, addTodo,updatetodoController,deleteTodoController }