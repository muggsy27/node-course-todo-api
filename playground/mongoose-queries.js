const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a7f7d076f8649490635ab87';
//
// if (!ObjectId.isValid(id)) {
//   console.log('id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log(todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log(todo);
// });
//
// Todo.findById(id).then(todo => {
//   if (!todo) {
//     return console.log('id not found');
//   }
//   console.log(todo);
// }).catch(err => console.log(err));

var id = '5a7aa5ba2a94c93807e3f38e';

if (!ObjectId.isValid) {
  console.log('user is not valid');
}

User.findById(id).then(user => {
  if (!user) {
    console.log('no user found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch(err => console.log(err));
