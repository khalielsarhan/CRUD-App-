const express= require('express');
const mongoose= require('mongoose');

const User = require('../models/userdata.js');

const router= express.Router();

const getTodo = async (req, res) => {
    try {
        const todo = await User.find({list});
        
        res.status(200).json(todo);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


const createTodo =  async (req, res) => {
    console.log(req.body);
    const newTodo = new User.list({
        name:req.body.name,
        description: req.body.description

    })
    try {
        await newTodo.save();

        res.status(201).json(newTodo);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateTodo = async (req, res) => {
    const getname = req.params.name;
    try{
        const updatedTodo = await User.findOneAndUpdate({
            list: {name :getname}
        },
        {   
            name:req.body.name,
            description: req.body.description
        }
        )
        res.status(202).json(updatedTodo);

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteTodo = async (req, res) => {
    const deletedTodo = req.params.name;

    try {
        await User.findOneAndRemove({list: {name :deletedTodo}});
        res.status(203).json("deleted");

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getTodo= getTodo;
module.exports.createTodo= createTodo;
module.exports.updateTodo= updateTodo;
module.exports.deleteTodo= deleteTodo;