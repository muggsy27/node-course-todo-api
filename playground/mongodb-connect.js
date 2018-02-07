// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

const dbName = 'TodoApp';

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');

  const db = client.db(dbName);

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('unable to insert todo', error);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Derek',
  //   age: 27,
  //   location: 'Pacific Beach'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a77f7cbeac7c202c828cf0c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('unable to fetch todos', error);
  // });


  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (error) => {
  //   console.log('unable to fetch todos', error);
  // });

  // db.collection('Users').find({name: 'Derek'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('unable to fetch todos', error);
  // });

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Derek'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5a79602ad13bbb032b3cf614')
  // }).then((result) => {
  //   console.log(result);
  // });

  // const Todos = db.collection('Todos');
  //
  // Todos.findOneAndUpdate({
  //   _id: new ObjectID('5a795f22d13bbb032b3cf613')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  const Users = db.collection('Users');

  Users.findOneAndUpdate({
    _id: new ObjectID('5a7a7d65a14f770405ab9f73')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Derek'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
