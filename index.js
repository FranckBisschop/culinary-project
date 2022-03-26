require('dotenv').config();
//Je récupère le module express
const express = require('express');
//J'initalise l'application express
const app = express();

//Je cree le lien avec mon routeur
const router = require('./app/router');
//Je cree mon port pour afficher ma page en localhost
const PORT = process.env.PORT || 4000

//J'utilise mon router
app.use(router);

//Je lance mon server et je le test dans ma console
app.listen(PORT, () => {
    console.log(`You can launched the server on http://localhost:${PORT}`)
})