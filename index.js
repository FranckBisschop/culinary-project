require('dotenv').config();

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const student = require('./student.js');

const app = express();


const router = require('./app/router');

const PORT = process.env.PORT || 4000


const url = 'mongodb://localhost:27017'
const dbName = 'monProjetMongo';

MongoClient.connect(url, function(err, client) {
  console.log("Connecté à MongoDB");
  const db = client.db(dbName);
  client.close();
});


mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connecté à Mongoose")
});


const createStudent = async studentData => {
    const student = await Student.create(studentData)
    return student
   }

   const findStudent = async firstName => {
    const student = await Student.findOne({firstName})
    return student
   }
   
   const findStudents = async firstName => {
    const student = await Student.find({})
    return student
   }

app.use(router);


// app.listen(PORT, () => {
//    console.log(`You can launched the server on http://localhost:${PORT}`)
// });


