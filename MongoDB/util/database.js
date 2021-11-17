const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://Rahul:rk9814166347@cluster0.vf48o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 .then(client =>{
   console.log('Connected!');
   callback(client);
 })
 .catch(err => {
   console.log(err);
});   
};

module.exports = mongoConnect;