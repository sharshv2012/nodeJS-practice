const express = require('express');

const router = express.Router(); // we are using the router method to create a router

router.post('/', (req, res) => {
    console.log(req.body); // req.body is used to access the form data which is in object form
    const {name} = req.body // we are getting the name from the form data
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.send("Please provide credentials");
});

module.exports = router; // we are exporting the router so that we can use it in other files
