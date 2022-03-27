// Je require express
const express = require('express');
// Je lance express
const router = express.Router();

router.get('/',(req, res) => {
    res.send('Hello World')
});

// J'exporte mon module
module.exports = router;