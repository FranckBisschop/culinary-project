require('dotenv').config();

const express = require('express');

const app = express();


const router = require('./app/router');

const PORT = process.env.PORT || 4000


app.use(router);


app.listen(PORT, () => {
    console.log(`You can launched the server on http://localhost:${PORT}`)
});


