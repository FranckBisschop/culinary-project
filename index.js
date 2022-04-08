require('dotenv').config();

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();


const router = require('./app/router');

const PORT = process.env.PORT || 4000


const url = 'mongodb://localhost:27017'
const dbName = 'monProjetMongo';

MongoClient.connect(url, function(err, client) {
  console.log("Connecté à MongoDB");
});

app.use(router);


// app.listen(PORT, () => {
//    console.log(`You can launched the server on http://localhost:${PORT}`)
// });


