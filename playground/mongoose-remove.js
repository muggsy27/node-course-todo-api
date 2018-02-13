const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a8256c160eaf501c567d783';

// Todo.findOneAndRemove(id).then(todo => console.log(todo));

// Todo.findByIdAndRemove(id).then(todo => console.log(todo));
