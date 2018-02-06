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
  //     return console.log('unable to isnert todo');
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

  db.collection('Users').find({name: 'Derek'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('unable to fetch todos', error);
  });

  client.close();
});
