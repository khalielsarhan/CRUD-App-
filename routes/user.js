const express = require("express");

const  userRou = require("../controllers/User.js"); 

const router = express.Router();

router.get('/', userRou.getTodo);
router.post('/', userRou.createTodo);
router.patch('/:roll', userRou.updateTodo);
router.delete('/:roll', userRou.deleteTodo);

module.exports=router;