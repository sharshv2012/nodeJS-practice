const express = require('express');
const app = express();

let {people} = require('./data');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({extended: false})); // this is to parse form data
// parsing form data means that we can access the form data in the request object
// extended: false means that we are not going to be dealing with any complex objects
// body-parser is a package that is used to parse form data but it is now included in express
// we can also use express.json() to parse json data4
app.use(express.json()); // this is to parse json data

app.post('/login', (req, res) => {
    console.log(req.body); // req.body is used to access the form data which is in object form
    const {name} = req.body // we are getting the name from the form data
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.send("Please provide credentials");
});


app.get('/api/people', (req, res) => {  
    res.status(200).json({success: true, data: people});
});

app.post('/api/people', (req, res) => { 
    const {name} = req.body; // getting the name from the form data
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name'});
    }
    res.status(201).json({success: true, person: name}); //201 is for created
});

app.post('/api/postman/people', (req, res) => {
    const {name, id} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name'});
    }
    people.push({name, id});
    res.status(201).json({success: true, data: [...people]});
})

app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res.status(404).json({success: false, msg: `No person with id ${id}`})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name
        }
        return person // we have to return the person object because we are using map
    })
    res.status(200).json({success: true, data: newPeople})
})  

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res.status(404).json({success: false, msg: `No person with id ${req.params.id}`})
    }
    people = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({success: true, data: people})
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});