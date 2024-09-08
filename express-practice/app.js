const express = require('express')
const path = require('path')

const app = express() 

app.use(express.static('./navbar-app')) // this is a middleware that serves static files
// this resolves the problem we were facing using http module in the previous example
// we don't have to write code for every route
// all the routes are added in index.html file

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('Resource not found')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})