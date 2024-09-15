const express = require('express');
const router = express.Router(); // we are using the router method to create a router
// router is like a mini app that we can use to create routes
// routes are like endpoints that we can use to access data

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,

} = require('../controllers/people'); // we are destructuring the getPeople function from the people.js file


router.get('/', getPeople);

// router.post('/', (req, res) => { 
//     const {name} = req.body; // getting the name from the form data
//     if(!name) {
//         return res.status(400).json({success: false, msg: 'Please provide a name'});
//     }
//     res.status(201).json({success: true, person: name}); //201 is for created
// });

router.post('/', createPerson); 

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);


// for calls with same endpoint but different methods

//we can do chaining like this

// router.route('/').get(getPeople).post(createPerson);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router; // we are exporting the router so that we can use it in other files