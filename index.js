require('dotenv').config();

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const morgan = require ('morgan')

const app = express();


const router = express.Router();

const PORT = process.env.PORT || 4000


const url = 'mongodb://localhost:27017'
const dbName = 'monProjetMongo';
let db

MongoClient.connect(url, function(err, client) {
  console.log("Connecté à MongoDB");
  db = client.db(dbName);
});

app.use(router);
app.use(morgan('combined'));
app.use(express.json());

async function newRecipe() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const recipe = database.collection("Recipe");
    const doc = {
      "name":"Boeuf Bourguignon",
      "servings":6,
      "ingredients":[{"name":"Viande de boeuf bourguignon","unit":"gram",
      "quantity":800}],
      "steps":[{"order":1,"instructions":"verser le boeuf dans une cocotte avec le beurre fondu"}]
    }
    const result = await recipe.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
newRecipe().catch(console.dir);
module.exports = {newRecipe}

app.post('/recipe', (req,res) => {
  res.status(201).json({status:"sucess"})
});


app.listen(PORT, () => {
   console.log(`server ready on http://localhost:${PORT}`)
});


