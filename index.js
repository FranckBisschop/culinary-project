require('dotenv').config();

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const morgan = require ('morgan')

const app = express();


const router = express.Router();

const PORT = process.env.PORT || 4000


const url = 'mongodb://localhost:27017'
const dbName = 'monProjetMongo';

MongoClient.connect(url, function(err, client) {
  console.log("Connecté à MongoDB");
});

app.use(router);
app.use(morgan('combined'));
app.use(express.json());

app.post('/recipe', (req,res) => {
  recipe.push(req.body);
  res.status(201).json({status:"sucess"})
});


app.listen(PORT, () => {
   console.log(`server ready on http://localhost:${PORT}`)
});


