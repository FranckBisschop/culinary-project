require('dotenv').config();

const express = require('express');
const { get } = require('express/lib/response');
const { MongoClient } = require('mongodb');
const morgan = require ('morgan')

const app = express();


const router = require('./app/routers');

const PORT = process.env.PORT || 4000


const url = 'mongodb://localhost:27017'
const dbName = 'CulinaryProject';
const client = new MongoClient(url)
const db = client.db("culinary");

app.use(router);
app.use(morgan('combined'));
app.use(express.json());


async function createRecipe(newRecipe) {
    const recipe = db.collection("Recipe");
    const result = await recipe.insertOne(newRecipe);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  }

async function getRecipes(allRecipes) {
  const recipes = db.collection("Recipes");
  const results = await recipes.find(allRecipes);
  console.log(`All documents are get: ${results.lenght}`);
}

app.post('/recipe', async (req,res) => {
  const newRecipe = req.body
  await createRecipe(newRecipe)
  res.status(201).json({status:"sucess"})
});

app.get('/recipes', async (req,res) => {
  const allRecipes = req.body
  await getRecipes(allRecipes)
  res.status(201).json({status:"sucess"})
})


app.listen(PORT, async () => {
  await client.connect();
  console.log(`server ready on http://localhost:${PORT}`)
});


