const express=require("express");
const router =express.Router();
const moment =require("moment")
const Todo =require('../model/Todo')
const todo =require('../controller/todo')

router.get("/",todo.homeController);
router.get("/add-todo",todo.addController)
router.get("/update-todo",todo.updateTodo)

router.get("/delete-todo",todo.deleteTodo)
router.post("/add-todo",todo.addTodo)
router.post("/update-todo/:id",todo.updatetodoController)
router.get("/confirm-delete",todo.deleteTodoController);
//LISTEN TO SERVER

module.exports =router;