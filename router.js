const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Server in up and running");
})

module.exports = router;