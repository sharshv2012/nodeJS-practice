const express = require('express')
const app = express()

app.get('/' , (req , res) => {
    res.send("<h1>Home Page</h1>")
})

app.get('/about' , (req , res) => {
    res.status(200).send("<h1>About Page</h1>") // it's a good practice to send status code
})

app.get('/contact' , (req , res) => {
    res.send("<h1>Contact Page</h1>")
})

app.all('*' , (req , res) => { // '*' means all the routes that are not defined
    res.status(404).send("<h1>404 Page Not Found! :(</h1>")
})


app.listen(3000 , () => {
    console.log("Server runs at port no. - http://localhost:3000")
})