let {people} = require('../data'); // we are destructuring the people array from the data.js file

const getPeople = (req, res) => {  
    res.status(200).json({success: true, data: people});
}

const createPerson = (req, res) => {
    const {name, id} = req.body;
    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide a name'});
    }
    people.push({name, id});
    res.status(201).json({success: true, data: [...people]});
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res.status(404).json({success: false, msg: `No person with id ${req.params.id}`})
    }
    people = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).json({success: true, data: people})
}


module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
}