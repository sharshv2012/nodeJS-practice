const express = require('express')
const logger = require('./logger')
const app = express()


// req -> Middleware -> res
// a middleware is a function that has access to the req and res objects


// creating a logger middleware

// const logger = (req, res, next) => {  // next is a callback that we have to run to move to the next middleware
//     const method = req.method
//     const url = req.url
//     const time = new Date().getUTCDate()
//     console.log(method, url, time)
//     next()
// } //shift it to separate file logger.js which will come inside middleware folder

// app.get('/about', logger, (req, res) => {
//     res.send('About')
// })

// we don't need to put redundant middleware in every route
// we can use app.use() to use a middleware globally

// app.use(logger) // this will work for every route // if I keep this after a route, it will not be executed for that route

app.use('/api', logger) // this will only run for /api routes

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => { // logger will not run for this route
    res.send('About')
})

app.get('/api/products', (req, res) => { // logger will run for this route
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})

